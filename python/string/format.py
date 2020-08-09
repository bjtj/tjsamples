
def main():
    print('Hello, {}.'.format('Steve'))
    print('Float number: {:.3f}'.format(0.123456))
    print('{{x: {}}}'.format('1'))
    print('item1: {}, \
item2: {}, \
item3: {}'.format(1,2,3))
    print('{:,}'.format(1234567))
    print('{:>12,}'.format(1234567))
    print('''hello
    world''')

if __name__ == '__main__':
    main()
