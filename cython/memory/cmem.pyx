import random
from libc.stdlib cimport malloc, free

def random_noise(int number=1):
    cdef int i
    cdef double *my_array = <double *> malloc(number * sizeof(double))
    if not my_array:
        raise MemoryError()

    try:
        ran = random.normalvariate
        for i in range(number):
            my_array[i] = ran(0, 1)

        return [x for x in my_array[:number]]
    finally:
        free(my_array)

