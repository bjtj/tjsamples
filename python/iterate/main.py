
def main():
    it = iter([1,2,3])
    print(next(it))               # 1
    print(next(it))               # 2

    arr = ['a', 'b', 'c', 'd']
    f = next((x for x in arr if x == 'b'), None)
    print(f)                      # b
    f = next((x for x in arr if x == 'x'), None)
    print(f)                      # None
    f = next((x for x in arr if x == 'x'), 999)
    print(f)                      # 999

    for x in iter([1,2,3]):
        print(x)                  # 1 2 3

if __name__ == '__main__':
    main()