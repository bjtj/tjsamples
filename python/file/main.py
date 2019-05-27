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


    assert(os.path.split('a/b/c')[0] == 'a/b')
    assert(os.path.split('a/b/c')[1] == 'c')
    assert(os.path.dirname('a/b/c') == 'a/b')
    assert(os.path.split(os.path.dirname('a/b/c'))[1] == 'b')
    
    shutil.rmtree('a')

    assert(os.path.splitext('a/b/c/d.txt')[0] == 'a/b/c/d')
    assert(os.path.basename('a/b/c/d.txt') == 'd.txt')
    assert(os.path.splitext('a/b/c/d.txt')[1] == '.txt')


    dump('x', '----')
    assert(os.path.exists('x'))
    os.unlink('x')              # os.remove('x')
    assert(not os.path.exists('x'))


if __name__ == '__main__':
    main()
