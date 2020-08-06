#!/usr/bin/env python

def main():
    arr1 = [1,2,3]
    arr2 = [3,1]

    mat = []

    for x in arr1:
        lst = []
        for y in arr2:
            lst.append(x * y)
        mat.append(lst)
    print(mat)
        

if __name__ == '__main__':
    main()
