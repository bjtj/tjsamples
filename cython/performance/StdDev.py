import math

def pyStdDev(a):
    mean = sum(a) / len(a)
    return math.sqrt((sum(((x - mean)**2 for x in a)) / len(a)))

import numpy as np

def npStdDev(a):
    return np.std(a)



