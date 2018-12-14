#include "NvInfer.h"
#include "NvInferPlugin.h"
#include "NvCaffeParser.h"
#include <algorithm>
#include <cassert>
#include <cmath>
#include <cstring>
#include <ctime>
#include <cuda_profiler_api.h>
#include <cuda_runtime_api.h>
#include <fstream>
#include <iomanip>
#include <iostream>
#include <map>
#include <sstream>
#include <sys/stat.h>
#include <iterator>
#include <vector>
#include <memory>
#include <getopt.h>
#include <chrono>

#include "buffers.h"
#include "half.h"

using namespace std;
using namespace nvinfer1;
using namespace plugin;


inline void enableDLA(IBuilder* b, int useDLACore)
{
    if (useDLACore >= 0)
    {
        b->allowGPUFallback(true);
        b->setFp16Mode(true);
        b->setDefaultDeviceType(DeviceType::kDLA);
        b->setDLACore(useDLACore);
    }
}

// 
struct InferDeleter
{
    template <typename T>
    void operator()(T* obj) const
	{
	    if (obj)
	    {
		obj->destroy();
	    }
	}
};


static Logger gLogger;

struct SampleParams
{
    int batchSize; //!< Number of inputs in a batch
    int dlaCore{-1};
    vector<string> dataDirs; //!< Directory paths where sample data files are stored
    vector<string> inputTensorNames;
    vector<string> outputTensorNames;
};

struct CaffeSampleParams : public SampleParams
{
    string prototxtFileName; //!< Filename of prototxt design file of a network
    string weightsFileName;  //!< Filename of trained weights file of a network
};

struct MNISTSampleParams : public CaffeSampleParams
{
    string meanFileName;
};

class Machine
{
private:
    template <typename T>
    using SampleUniquePtr = unique_ptr<T, InferDeleter>;
    MNISTSampleParams mParams;
    shared_ptr<nvinfer1::ICudaEngine> mEngine = nullptr;
    nvinfer1::Dims mInputDims;
    SampleUniquePtr<nvcaffeparser1::IBinaryProtoBlob> mMeanBlob;
public:
    Machine(const MNISTSampleParams& params);
    virtual ~Machine();

    bool build();
    bool infer();
    bool processInput(const samplesCommon::BufferManager& buffers, const string& inputTensorName, int inputFileIdx) const;
    bool verifyOutput(const samplesCommon::BufferManager& buffers, const string& outputTensorName, int groundTruthDigit) const;

    void constructNetwork(SampleUniquePtr<nvinfer1::IBuilder>& builder, SampleUniquePtr<nvinfer1::INetworkDefinition>& network, SampleUniquePtr<nvcaffeparser1::ICaffeParser>& parser);
};


Machine::Machine(const MNISTSampleParams& params)
    : mParams(params) {
}

Machine::~Machine() {
}

bool Machine::build() {
    auto builder = SampleUniquePtr<nvinfer1::IBuilder>(nvinfer1::createInferBuilder(gLogger));
    if (!builder)
        return false;

    auto network = SampleUniquePtr<nvinfer1::INetworkDefinition>(builder->createNetwork());
    if (!network)
        return false;

    auto parser = SampleUniquePtr<nvcaffeparser1::ICaffeParser>(nvcaffeparser1::createCaffeParser());
    if (!parser)
        return false;

    constructNetwork(builder, network, parser);
    builder->setMaxBatchSize(mParams.batchSize);
    builder->setMaxWorkspaceSize(16 * (1 << 20));
    builder->allowGPUFallback(true);
    enableDLA(builder.get(), mParams.dlaCore);

    mEngine = move(shared_ptr<nvinfer1::ICudaEngine>(builder->buildCudaEngine(*network), InferDeleter()));

    if (!mEngine)
        return false;

    assert(network->getNbInputs() == 1);
    mInputDims = network->getInput(0)->getDimensions();
    assert(mInputDims.nbDims == 3);

    return true;
}


bool Machine::infer() {
    // Create RAII buffer manager object
    samplesCommon::BufferManager buffers(mEngine, mParams.batchSize);

    auto context = SampleUniquePtr<nvinfer1::IExecutionContext>(mEngine->createExecutionContext());
    if (!context)
        return false;

    // Pick a random digit to try to infer
    srand(time(NULL));
    const int digit = rand() % 10;

    // Read the input data into the managed buffers
    // There should be just 1 input tensor
    assert(mParams.inputTensorNames.size() == 1);
    if (!processInput(buffers, mParams.inputTensorNames[0], digit))
        return false;

    // Create CUDA stream for the execution of this inference.
    cudaStream_t stream;
    CHECK(cudaStreamCreate(&stream));

    // Asynchronously copy data from host input buffers to device input buffers
    buffers.copyInputToDeviceAsync(stream);

    // Asynchronously enqueue the inference work
    if (!context->enqueue(mParams.batchSize, buffers.getDeviceBindings().data(), stream, nullptr))
        return false;

    // Asynchronously copy data from device output buffers to host output buffers
    buffers.copyOutputToHostAsync(stream);

    // Wait for the work in the stream to complete
    cudaStreamSynchronize(stream);

    // Release stream
    cudaStreamDestroy(stream);

    // Check and print the output of the inference
    // There should be just one output tensor
    assert(mParams.outputTensorNames.size() == 1);
    bool outputCorrect = verifyOutput(buffers, mParams.outputTensorNames[0], digit);

    return outputCorrect;
}

void Machine::constructNetwork(SampleUniquePtr<nvinfer1::IBuilder>& builder, SampleUniquePtr<nvinfer1::INetworkDefinition>& network, SampleUniquePtr<nvcaffeparser1::ICaffeParser>& parser)
{
    const nvcaffeparser1::IBlobNameToTensor* blobNameToTensor = parser->parse(
        locateFile(mParams.prototxtFileName, mParams.dataDirs).c_str(),
        locateFile(mParams.weightsFileName, mParams.dataDirs).c_str(),
        *network,
        nvinfer1::DataType::kFLOAT);

    for (auto& s : mParams.outputTensorNames)
        network->markOutput(*blobNameToTensor->find(s.c_str()));


    // add mean subtraction to the beginning of the network
    Dims inputDims = network->getInput(0)->getDimensions();
    mMeanBlob = SampleUniquePtr<nvcaffeparser1::IBinaryProtoBlob>(parser->parseBinaryProto(locateFile(mParams.meanFileName, mParams.dataDirs).c_str()));
    Weights meanWeights{DataType::kFLOAT, mMeanBlob->getData(), inputDims.d[1] * inputDims.d[2]};

    auto mean = network->addConstant(Dims3(1, inputDims.d[1], inputDims.d[2]), meanWeights);
    auto meanSub = network->addElementWise(*network->getInput(0), *mean->getOutput(0), ElementWiseOperation::kSUB);
    network->getLayer(0)->setInput(0, *meanSub->getOutput(0));
}


bool Machine::processInput(const samplesCommon::BufferManager& buffers, const string& inputTensorName, int inputFileIdx) const
{
    const int inputH = mInputDims.d[1];
    const int inputW = mInputDims.d[2];

    // Read a random digit file
    srand(unsigned(time(nullptr)));
    vector<uint8_t> fileData(inputH * inputW);
    readPGMFile(locateFile(to_string(inputFileIdx) + ".pgm", mParams.dataDirs), fileData.data(), inputH, inputW);

    // Print ASCII representation of digit
    cout << "\nInput:\n"
              << endl;
    for (int i = 0; i < inputH * inputW; i++)
        cout << (" .:-=+*#%@"[fileData[i] / 26]) << (((i + 1) % inputW) ? "" : "\n");

    float* hostInputBuffer = static_cast<float*>(buffers.getHostBuffer(inputTensorName));

    for (int i = 0; i < inputH * inputW; i++)
        hostInputBuffer[i] = float(fileData[i]);

    return true;
}


bool Machine::verifyOutput(const samplesCommon::BufferManager& buffers, const string& outputTensorName, int groundTruthDigit) const
{
    const float* prob = static_cast<const float*>(buffers.getHostBuffer(outputTensorName));

    // Print histogram of the output distribution
    cout << "\nOutput:\n\n";
    float val{0.0f};
    int idx{0};
    for (unsigned int i = 0; i < 10; i++)
    {
        val = max(val, prob[i]);
        if (val == prob[i])
            idx = i;
        cout << i << ": " << string(int(floor(prob[i] * 10 + 0.5f)), '*') << "\n";
    }
    cout << endl;

    return (idx == groundTruthDigit && val > 0.9f);
}

struct Args
{
    bool runInInt8{false};
    bool help{false};
    int useDLACore{-1};
    vector<string> dataDirs;
};

MNISTSampleParams initializeSampleParams(const Args& args)
{
    MNISTSampleParams params;
    if (args.dataDirs.size() != 0) //!< Use the data directory provided by the user
        params.dataDirs = args.dataDirs;
    else //!< Use default directories if user hasn't provided directory paths
    {
        params.dataDirs.push_back("data/mnist/");
        params.dataDirs.push_back("data/samples/mnist/");
    }
    params.prototxtFileName = "mnist.prototxt";
    params.weightsFileName = "mnist.caffemodel";
    params.meanFileName = "mnist_mean.binaryproto";
    params.inputTensorNames.push_back("data");
    params.batchSize = 1;
    params.outputTensorNames.push_back("prob");
    params.dlaCore = args.useDLACore;

    return params;
}

inline bool parseArgs(Args& args, int argc, char* argv[])
{
    while (1)
    {
        int arg;
        static struct option long_options[] = {
            {"help", no_argument, 0, 'h'},
            {"datadir", required_argument, 0, 'd'},
            {"int8", no_argument, 0, 'i'},
            {"useDLACore", required_argument, 0, 'u'},
            {nullptr, 0, nullptr, 0}};
        int option_index = 0;
        arg = getopt_long(argc, argv, "hd:iu", long_options, &option_index);
        if (arg == -1)
            break;

        switch (arg)
        {
        case 'h':
            args.help = true;
            return false;
        case 'd':
            if (optarg)
                args.dataDirs.push_back(optarg);
            else
            {
                cerr << "ERROR: --datadir requires option argument" << endl;
                return false;
            }
            break;
        case 'i':
            args.runInInt8 = true;
            break;
        case 'u':
            if (optarg)
                args.useDLACore = stoi(optarg);
            break;
        default:
            return false;
        }
    }
    return true;
}

void printHelpInfo()
{
    cout << "Usage: ./sample_mnist [-h or --help] [-d or --datadir=<path to data directory>] [--useDLACore=<int>]\n";
    cout << "--help          Display help information\n";
    cout << "--datadir       Specify path to a data directory, overriding the default. This option can be used multiple times to add multiple directories. If no data directories are given, the default is to use (data/samples/mnist/, data/mnist/)" << endl;
    cout << "--useDLACore=N  Specify a DLA engine for layers that support DLA. Value can range from 0 to n-1, where n is the number of DLA engines on the platform." << endl;
}

int main(int argc, char *argv[])
{

    Args args;

    if (!parseArgs(args, argc, argv))
    {
        if (args.help)
        {
            printHelpInfo();
            return EXIT_SUCCESS;
        }
        return EXIT_FAILURE;
    }
    MNISTSampleParams params = initializeSampleParams(args);
    Machine machine(params);
    bool ret = machine.build();
    cout << "Machine Build Result = " << (ret ? "true" : "false") << endl;

    auto start = chrono::system_clock::now();

    for (auto i = 0; i < 10; i++)
	machine.infer();

    chrono::duration<double> sec = chrono::system_clock::now() - start;
    cout << sec.count() * 1000 << " milliseconds" << endl;
    
    return 0;
}
