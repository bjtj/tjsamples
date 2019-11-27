import os


def main():
    open('out.txt', 'w').write('hello')
    print(os.stat('out.txt'))
    print('File size: {}'.format(os.stat('out.txt').st_size))
    os.unlink('out.txt')
    print(os.stat('out.txt'))   # exception

if __name__ == '__main__':
    main()
