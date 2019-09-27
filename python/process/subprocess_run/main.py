import subprocess
import sys


def main():
    if sys.version_info[0] < 3:
        raise Exception('use python3')
    
    subprocess.run(['ls', '-asl'])

    print('----')

    proc = subprocess.run(['grep', 'f'], stdout=subprocess.PIPE,
                          input='one\ntwo\three\nfour\nfive\nsix\n', encoding='ascii')

    print('Return Code: {}'.format(proc.returncode))
    print(proc.stdout)


if __name__ == '__main__':
    main()
