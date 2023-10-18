
def main():
    print('Hello, {}.'.format('Steve'))            # Hello, Steve.
    print('Float number: {:.3f}'.format(0.123456)) # Float number: 0.123
    print('{{x: {}}}'.format('1'))                 # {x: 1}
    print('item1: {}, \
item2: {}, \
item3: {}'.format(1,2,3))            # item1: 1, item2: 2, item3: 3
    print('{:,}'.format(1234567))    # 1,234,567
    print('{:>12,}'.format(1234567)) #    1,234,567
    print('''hello
    world''')
    # hello
    #     world

if __name__ == '__main__':
    main()

    





