CXXFLAGS = -std=c++11 -g -m64
LIBS = -lnvinfer -lnvparsers -lnvinfer_plugin -lnvonnxparser

all:
	nvcc -o mnist main.cpp $(CXXFLAGS) $(LIBS)

clean:
	rm -rf mnist
