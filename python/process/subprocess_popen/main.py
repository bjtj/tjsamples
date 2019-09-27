# https://stackoverflow.com/a/2813530

import subprocess


def print_example():

    print('-- Print Example --')
    
    cmd = ['ls', '-asl']
    proc = subprocess.Popen(cmd, stdout=subprocess.PIPE)
    while True:
        line = proc.stdout.readline()
        if not line:
            break
        print('LINE: {}'.format(line.decode('utf-8').rstrip()))


def write_example():
    # https://stackoverflow.com/a/165662

    print('-- Write Example --')
    
    cmd = ['grep', 'f']
    proc = subprocess.Popen(cmd, stdout=subprocess.PIPE, stdin=subprocess.PIPE)
    comm = proc.communicate(input='one\ntwo\nthree\nfour\nfive\nsix\n'.encode())[0]
    print(comm.rstrip().decode())

    
def main():
    print_example()
    write_example()


if __name__ == '__main__':
    main()
