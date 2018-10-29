import math

def cyStdDev(a):
    m = a.mean(0)
    w = a - m
    wSq = w**2
    return math.sqrt(wSq.mean())

cdef extern from "math.h":
    double sqrt(double m)

from numpy cimport ndarray
cimport numpy as np
cimport cython

@cython.boundscheck(False)
def cyOptStdDev(ndarray[np.float64_t, ndim=1] a not None):
    cdef Py_ssize_t i
    cdef Py_ssize_t n = a.shape[0]
    cdef double m = 0.0
    for i in range(n):
        m += a[i]
    m /= n
    cdef double v = 0.0
    for i in range(n):
        v += (a[i] - m)**2
    return sqrt(v / n)


cdef extern from "std_dev.h":
    double std_dev(double * arr, size_t siz)

def cStdDev(ndarray[np.float64_t, ndim=1] a not None):
    return std_dev(<double*> a.data, a.size)


