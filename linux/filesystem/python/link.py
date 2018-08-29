import os

def is_symlink(path):
    try:
        return os.path.islink(path)
    except Exception as e:
        return os.is_symlink(path)

def silent_makedirs(path):
    if not os.path.exists(path):
        os.makedirs(path)


def silent_unlink(path):
    if os.path.exists(path) and is_symlink(path):
        os.unlink(path)


def main():
    silent_makedirs('a')
    with open('a/x.txt', 'w') as f:
        f.write('hello in a')

    silent_unlink('b')
    os.symlink('a', 'b')
    print('b is symlink ? {}'.format(is_symlink('b')))

    with open('b/x.txt', 'r') as f:
        print(f.read())

    silent_makedirs('c')
    with open('c/x.txt', 'w') as f:
        f.write('hello in c')

    os.unlink('b')
    os.symlink('c', 'b')

    with open('b/x.txt', 'r') as f:
        print(f.read())

    

if __name__ == '__main__':
    main()
