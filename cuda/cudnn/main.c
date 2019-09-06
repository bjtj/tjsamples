#include "cudnn.h"
#include <unistd.h>
#include <stdio.h>
int main(int argc, const char* argv[]) {
    cudnnHandle_t cudnn;
    cudnnCreate(&cudnn);
    while(1) sleep(1);
    return 0;
}
