#!/usr/bin/env python
import argparse
from parse_file import LoadFromFile


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--message')
    parser.add_argument('--arg2')
    parser.add_argument('--flag', action='store_true')
    parser.add_argument('--file', type=open, action=LoadFromFile)
    args = parser.parse_args(
        ['--message', 'hello', '--arg2', 'world', '--flag']
    )
    print(args)
    write2file(args, '.args')
    args2 = parser.parse_args(['--file', './.args'])
    assert args == args2


def write2file(ns, filename):
    with open(filename, 'w') as f:
        for k, v in vars(ns).items():
            print(f'key: {k}, value: {v}')
            if k == 'file':
                print('skip')
                continue
            if v is False:
                print('skip')
                continue
            if v is True:
                print('flag')
                f.write(f'{k}=\n')
            else:
                print('normal')
                f.write(f'{k}={str(v)}\n')


if __name__ == '__main__':
    main()
