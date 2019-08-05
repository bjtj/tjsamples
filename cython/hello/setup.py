from distutils.core import setup
from Cython.Build import cythonize # pip install -U cython

setup(name="hello",
      ext_modules=cythonize("hello.pyx"),
      )

