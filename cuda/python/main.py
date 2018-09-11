import os
import pycuda.driver as cuda
import pycuda.autoinit
from pycuda.compiler import SourceModule
import numpy as np


def main():
    a = np.random.randn(4,4)
    a = a.astype(np.float32)
    a_gpu = cuda.mem_alloc(a.nbytes)
    cuda.memcpy_htod(a_gpu, a)

if __name__ == '__main__':
    main()
