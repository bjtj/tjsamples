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

    print('== inout ==')
    img = np.ones(5, dtype=np.uint8)
    probs = np.zeros(7)
    ret = infer.cyinfer(img, probs)
    print(ret)
    print(probs)

    

if __name__ == '__main__':
    main()
