import os

def main():
    items = [1,2,3,4,5]
    print(map(lambda x: x**2, items))
    print(filter(lambda x: x % 2 == 0, items))
    print(reduce(lambda x, y: x + y, items))

if __name__ == '__main__':
    main()
