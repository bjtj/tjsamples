import cyinfer as infer
import numpy as np



def main():

    print('== init ==')
    infer.cyinit(['hello', 'world', '!!!'])

    print('== cynums ==')
    arr = np.zeros(5, dtype=np.int)
    infer.cynums(arr)
    print(arr)

    print('== cynums2 ==')
    arr = infer.cynums2(5)
    print(type(arr))
    print(arr)
    print(arr.tolist())
    print(np.array(arr))

    print('== cyinfer ==')
    img = np.ones(5, dtype=np.uint8)
    probs = np.zeros(7)
    ret = infer.cyinfer(img, probs)
    print(ret)
    print(probs)

    print('== cyinferf ==')
    mat = np.ones(5, dtype=np.float32)
    print(infer.cyinferf(mat))

    print('== cysummat ==')
    mat = np.array([[1,2,3],[4,5,6]], dtype=np.int32)
    print(mat)
    print(infer.cysummat(mat.flatten()))

    print('== cysummat2d ==')
    mat = np.array([[1,2,3],[4,5,6]], dtype=np.int32)
    print(mat)
    print(infer.cysummat2d(mat))
    

if __name__ == '__main__':
    main()
