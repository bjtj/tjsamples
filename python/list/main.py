from math import *

def main():
    lst = [1,2,3,4]

    print(lst)

    for i in lst:
        print(i)


    print(lst[:2])
    print(lst[2:])

    lst = [1,2,3]
    print('half 1st --', lst[:int(ceil(len(lst) / 2.0))])
    print('half 2nd --', lst[int(ceil(len(lst) / 2.0)):])

if __name__ == '__main__':
    main()
