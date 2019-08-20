#include <unistd.h>
#include <string.h>
#include <stdio.h>
#include <pthread.h>

static void * foo(void * arg)
{
    printf("Hello in thread\n");
    return NULL;
}

int main(int argc, char *argv[])
{
    int retcode;
    pthread_t handle;
    if (pthread_create(&handle, NULL, foo, NULL) != 0) {
	perror("pthread_create() failed");
	return 1;
    }
    pthread_join(handle, (void*)&retcode);
    printf("ret code: %d\n", retcode);

    {
    	pthread_attr_t attr;
    	if (pthread_attr_init(&attr) != 0) {
    	    perror("pthread_attr_init() failed");
    	    return 1;
    	}

    	if (pthread_attr_setdetachstate(&attr, PTHREAD_CREATE_DETACHED) != 0) {
    	    perror("pthread_attr_setdetachstate() failed");
    	    return 1;
    	}

    	if (pthread_create(&handle, &attr, foo, NULL) != 0) {
    	    perror("pthread_create() failed");
    	    return 1;
    	}

    	pthread_attr_destroy(&attr);
    }

    usleep(100 * 1000);

    return 0;
}
