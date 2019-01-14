import random


def main():
    print('-- random() --')
    print([random.random() for x in range(10)])
    print('-- randint() --')
    print([random.randint(1, 10) for x in range(10)])
    print('-- randrange() --')
    print([random.randrange(0, 101, 2) for x in range(10)])
    print('-- choice() --')
    print([random.choice('abcdefghijklmnop') for x in range(10)])
    print('-- shuffle() --')
    lst = [1,2,3,4,5]
    random.shuffle(lst)
    print(lst)
    print('-- sample() --')
    print([random.sample([1,2,3,4,5], 3) for x in range(10)])

if __name__ == '__main__':
    main()
