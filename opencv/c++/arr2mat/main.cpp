#include <iostream>
#include <opencv2/opencv.hpp>

using namespace std;
using namespace cv;

// opencv types (e.g. CV_8UC(n) ... CV_64FC(n))
// * https://docs.opencv.org/trunk/d1/d1b/group__core__hal__interface.html

void test1() {
    double arr[100][100];
    Mat mat(100, 100, CV_64F);

    for (int i = 0; i < 100 * 100; ++i) {
	arr[i / 100][i % 100] = 0.5;
    }
    
    memcpy(mat.data, arr, 100 * 100 * sizeof(double));
    
    imshow("mat", mat);
    waitKey(0);
}

void test2() {
    double arr[100][100];
    Mat mat(100, 100, CV_64F);

    for (int i = 0; i < 100 * 100; ++i) {
	arr[i / 100][i % 100] = ((i % 100) / 100.0);
    }
    
    memcpy(mat.data, arr, 100 * 100 * sizeof(double));
    
    imshow("mat", mat);
    waitKey(0);
}

int main(int argc, char *argv[])
{
    test1();
    test2();
    
    return 0;
}
