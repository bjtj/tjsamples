import os
import shutil


def mkdir(path):
    if not os.path.exists(path):
        os.makedirs(path)

def dump(path, content):
    with open(path, 'w') as f:
        f.write(content)


def main():
    mkdir('a/b/c')
    dump('a/hello.txt', 'Hello')
    dump('a/hi.txt', 'Hi')
    dump('a/b/c/bye', 'Bye~')

    for root, dirs, files in os.walk('a'):
        print('{} -- dirs: {} {}, files: {} {}'.format(root, len(dirs), dirs, len(files), files))


    assert(os.path.isdir('a/b') == True)
    assert(os.path.isdir('a/hello.txt') == False)
    assert(os.path.isfile('a/hello.txt') == True)

    shutil.rmtree('a')


if __name__ == '__main__':
    main()
