#include <inttypes.h>

int init(int argc, char * argv[]);
int infer(unsigned char * img, int size, float * probs);
int inferf(float * mat, int size, float * probs);
void nums(int * outbuf, int size);
int summat(int32_t * mat, int32_t size);
