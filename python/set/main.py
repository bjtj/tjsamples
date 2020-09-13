#!/usr/bin/env python

def main():
    print(set([1,2,3,1,2]))
    print(set([2,1,3,1,2]))
    s = set([1,2,3,1,2])
    for i in s:
        print(i)
    for i, v in enumerate(s):
        print(i, v)
    print(set([1,2,3]) == set([3,2,1])) # true
    print(list([1,2,3]) == list([3,2,1])) # false
    print(set(['1','2','3']) == set(['3','2','1'])) # true

    # add
    s = set()
    print(s)
    s.add(1)
    print(s)
    s.add(1)
    print(s)
    s.add(3)
    print(s)

    # remove or discard
    try:
        s.remove(4)
    except Exception as e:
        print(e)
    s.discard(4)

    # join
    s2 = set([4,5,1])
    print(s.union(s2))

    if set():
        print('set()')
    else:
        print('set() else')


if __name__ == '__main__':
    main()
