import numpy as np

if __name__ == '__main__':
    arr = np.array([1,2,3])
    print(arr)                    # [1 2 3]
    print(type(arr))              # <class 'numpy.ndarray'>
    print(arr[0])                 # 1
    print(type(arr[0]))           # <class 'numpy.int32'>

    list = arr.tolist()
    print(list)                   # [1, 2, 3]
    print(type(list))             # <class 'list'>
    print(list[0])                # 1
    print(type(list[0]))          # <class 'int'>

    farr = np.array([1.0, 1.1, 1.2])
    print(farr)                   # [1.  1.1 1.2]
    print(type(farr))             # <class 'numpy.ndarray'>
    print(farr[0])                # 1.0
    print(type(farr[0]))          # <class 'numpy.float64'>

    flist = farr.tolist()
    print(flist)                  # [1.0, 1.1, 1.2]
    print(type(flist))            # <class 'list'>
    print(flist[0])               # 1.0
    print(type(flist[0]))         # <class 'float'>
