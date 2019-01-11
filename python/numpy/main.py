import numpy as np

def arr():
    print('-- arr --')
    arr = np.array([])
    print(arr)

    arr = np.array(arr)
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


def shape():
    print('-- shape --')
    print(np.array(1).shape)
    print(np.array([1,2]).shape)
    print(np.array([[1,2,3],[3,4,5]]).shape)


def convert():
    print('-- convert --')
    bytes = np.array([1,2,3]).tobytes()
    print(len(bytes))
    arr = np.frombuffer(bytes, dtype=np.uint64)
    print(type(arr))
    print(arr.shape)
    print(arr)


def repeat():
    print(' -- repeat --')
    arr = np.array([1,2,3])
    print(arr)
    print(arr * 3)
    print(np.repeat(np.array([[1,2,3]]), 3, axis=0))
    arr = np.array([[1,2,3]])
    print(np.repeat(arr, 3, axis=0))
    print(np.repeat(arr, 1, axis=0))
    print(np.repeat(arr, 1, axis=0))
    print(np.repeat(arr, 1, axis=0))
    print(np.repeat(arr, 1, axis=0))
    print(np.repeat(arr, 3, axis=0))
    

def zeros():
    print('-- zeros --')
    print(np.zeros([3, 2, 1]))


def select_axis():
    print('-- select axis --')
    arr = np.array([[1,2], [3,4]])
    print(arr[:,1])
    print(arr[:,0])


def empty():
    print('-- empty --')
    # print(np.array([]).max())
    assert(np.array([]).size == 0)
    print(np.array([1,2]).size != 0)
    print(np.array([1,2]).size > 0)
    print(np.array([[1,2],[3,4]]).size == 4)


def dimension():
    print('dimension')
    arr = np.array([[[1,2],[3,4]],[[5,6],[7,8]]])
    print(arr.shape)
    assert(len(arr.shape) == 3)
    assert(arr.ndim == 3)


def where():
    print('-- where --')
    print(np.where(np.array([1, 2, 3, 4, 5]) % 2 == 0))
    print(type(np.where(np.array([1, 2, 3, 4, 5]) % 2 == 0)[0]))
    print(np.where(np.array([1, 2, 3, 4, 5]) % 2 == 0)[0].size)

    print(np.where(np.array([1, 3, 5]) % 2 == 0)[0].size)


def main():
    arr()
    shape()
    convert()
    repeat()
    select_axis()
    empty()
    dimension()
    where()
    

if __name__ == '__main__':
    main()
