#!/usr/bin/env python

import numpy as np


def main():

    a = np.array((1,2,3))
    b = np.array((4,5))
    print(np.outer(a, b))


    x = np.zeros((a.shape[0], b.shape[0]))
    print(x)
    print(x.shape)
    


if __name__ == '__main__':
    main()
