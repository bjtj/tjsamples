cimport cython

@cython.boundscheck(False)
def hello(str name):
    print('hello, {}'.format(name))
