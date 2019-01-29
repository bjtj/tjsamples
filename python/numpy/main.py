import numpy as np
import os
import json


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


def auxiliary():
    print('-- auxiliary --')
    print(np.array([1,2,3]).sum())
    arr = np.array([[[1,2], [3,4]],[[5,6], [7,8]]])
    for i, item in enumerate(arr):
        print('[{}]'.format(i+1))
        print(item)

    print('sum...')
    arr = np.array([[1,2], [3,4]])
    print(arr.sum(axis=0))      # [4 6]
    print(arr.sum(axis=1))      # [3 7]

def serialize():
    try:
        from StringIO import StringIO as cio
    except:
        from io import BytesIO as cio

    # serialize
    f = cio()
    arr = np.array([1,2,3])
    np.save(f, arr)
    f.seek(0)
    serialized = json.dumps(f.read().decode('latin-1'))

    # deserialize
    f = cio()
    f.write(json.loads(serialized).encode('latin-1'))
    f.seek(0)
    print('np.load(f): {}'.format(np.load(f)))


def save():

    print('-- save --')

    if os.path.exists('out.npy'):
        print(np.load('out.npy'))
    
    arr = np.array([1,2,3,4,5])
    print(arr)
    np.save('out.npy', arr)
    print(np.load('out.npy'))

    os.remove('out.npy')


def transpose():
    
    print('-- transpose --')
    
    arr = np.array([[[1,2,3],[4,5,6]],
                    [[7,8,9],[10,11,12]]])

    print(arr.shape)
    assert(arr.shape == (2, 2, 3))
    print(arr)


    arr = arr.transpose((2, 0, 1))
    print(arr.shape)
    assert(arr.shape == (3, 2, 2))
    print(arr)


def slice():
    print('-- slice --')
    arr = np.array([1,2,3,4,5,6,7,8,9,10])
    print(arr[2:-2])            # [3 4 5 6 7 8]
    print(arr[0:-0])            # []


def random():
    print('-- random --')
    arr = np.random.rand(10)
    print(arr)


def sort():
    print('-- sort --')
    arr = np.random.rand(10)
    print('arr: {}'.format(arr))
    x = arr
    arr.sort()
    print('arr: {}'.format(arr))
    print('arr[::-1]: {}'.format(arr[::-1]))
    print('x: {}'.format(x))


def broadcast():
    print('-- broadcast --')
    arr = np.array([[1,2],[3,4]])
    print(arr)


def algebra():
    print('-- algebra --')
    arr1 = np.array([1,1])
    arr2 = np.array([2,2])
    print(np.linalg.norm(arr1 - arr2))

    arr1 = np.array([1,1])
    arr2 = np.array([1,2])
    print(np.linalg.norm(arr1 - arr2))

    arr1 = np.array([-1,-1])
    arr2 = np.array([1,2])
    print(np.linalg.norm(arr1 - arr2))

    

def main():
    arr()
    shape()
    convert()
    repeat()
    select_axis()
    empty()
    dimension()
    where()
    auxiliary()
    serialize()
    save()
    transpose()
    slice()
    random()
    sort()
    algebra()
    

if __name__ == '__main__':
    main()
