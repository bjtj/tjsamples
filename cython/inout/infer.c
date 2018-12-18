#include <stdio.h>

int init(int argc, char * argv[])
{
    int i = 0;
    for (; i < argc; i++) {
	printf("arg: %s\n", argv[i]);
    }
    return 0;
}

int infer(unsigned char * img, int size, float * probs)
{
    int rcnt = 0;
    int gcnt = 0;
    int bcnt = 0;
    int i;
    int total = 0;
    for (i = 0; i < size; ++i) {
	int c = i % 3;
	switch (c) {
	case 0:
	    rcnt++;
	    break;
	case 1:
	    gcnt++;
	    break;
	case 2:
	    bcnt++;
	    break;
	default:
	    break;
	}

	total += img[i];
    }

    probs[0] = rcnt;
    probs[1] = gcnt;
    probs[2] = bcnt;
    probs[3] = rcnt / (float)size;
    probs[4] = gcnt / (float)size;
    probs[5] = bcnt / (float)size;
    probs[6] = total;

    return 1;
}

int inferf(float * mat, int size, float * probs)
{
    int i;
    float total = 0.f;
    for (i = 0; i < size; ++i) {
	total += mat[i];
    }
    probs[0] = total;
    return 1;
}

void nums(int * outbuf, int size)
{
    int i = 0;
    for (i = 0; i < size; ++i) {
	outbuf[i] = (i + 1);
    }
}

int summat(int * mat, int size)
{
    int sum = 0;
    int i;
    for (i = 0; i < size; ++i) {
	printf("%d. %d\n", i, mat[i]);
	sum += mat[i];
    }
    return sum;
}
