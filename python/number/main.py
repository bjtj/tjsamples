
def print_x(n):
    print('{} (type: {})'.format(n, type(n)))

def main():
    print(int('000'))
    print(int('002'))
    print(int('003'))
    print(int('004'))

    print('{:03d}'.format(2))

    print_x(1)
    print_x(1.0)
    print_x(float(2.0))
    print_x(float(3))

if __name__ == '__main__':
    main()
