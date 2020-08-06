#!/usr/bin/env python


def remove_two(lst):
    return lst[:-2]
    

def test(lst):
    print('-'*80)
    while len(lst) > 0:
        x = len(lst)
        print(lst)
        lst = remove_two(lst)
        assert (len(lst) - x) <= 2

    assert len(lst) == 0


def main():
    test([1,2,3,4])
    test([1])
    test([1,2,3,4,5])
    test([1,2,3,4,5,6,7,8,9])


    for i, x in enumerate([1,2,3]):
        print(f'[{i}] - {x}')


if __name__ == '__main__':
    main()
