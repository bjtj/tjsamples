import numpy as np

def main():

    arr = np.array([])
    print(arr)
    
    arr = np.array([1,2,3])
    print(arr)

    arr = np.append(arr, -1)
    print(arr)

    arr = np.append(arr, [4,5,6])
    print(arr)

    arr = np.append(arr, [1,2,3], axis=0)
    print(arr)

    bytes = arr.tobytes()
    print(len(bytes))

    arr = np.array(arr, np.uint8)
    print(len(arr.tobytes()))

    arr = np.array(arr, np.uint32)
    print(len(arr.tobytes()))

    arr = np.append(arr, np.array([7,8,9], np.uint8))
    print(arr)
    print(len(arr.tobytes()))

    bytes = np.array([1,2,3]).tobytes()
    print(len(bytes))
    arr = np.frombuffer(bytes, dtype=np.uint64)
    print(type(arr))
    print(arr.shape)
    print(arr)

    # zeros

    print(np.zeros([3, 2, 1]))

if __name__ == '__main__':
    main()
