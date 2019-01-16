from math import *
import sys

def list_clear_and_set(lst, target):
    if sys.version_info[0] == 2:
        del lst[:]
    else:
        lst.clear()
    lst += target


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

    print('-- clear() --')
    lst = [1,2,3]
    a = lst
    print('lst', lst)

    lst = []
    print('lst', lst)
    print('a', a)

    lst = [1,2,3]
    a = lst
    
    if sys.version_info[0] == 2:
        del lst[:]
    else:
        lst.clear()
    print('lst', lst)
    print('a', a)

    lst += [4,5,6]
    print('lst', lst)
    print('a', a)


    list_clear_and_set(lst, [7,8,9])
    print('lst', lst)
    print('a', a)
    

if __name__ == '__main__':
    main()
