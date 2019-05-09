import os

def main():
    items = [1,2,3,4,5]
    print(map(lambda x: x**2, items)) # [1, 4, 9, 16, 25]
    print(filter(lambda x: x % 2 == 0, items)) # [2, 4]
    print(reduce(lambda x, y: x + y, items))   # 15

if __name__ == '__main__':
    main()
