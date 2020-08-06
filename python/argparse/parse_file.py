#!/usr/bin/env python
from functools import reduce
import argparse
import shlex



class LoadFromFile(argparse.Action):
    def __call__(self, parser, namespace, values, option_string=None):
        with values as f:
            lines = f.read().splitlines()
            tokens = [x.split('=', 1) for x in lines]
            tokens = [(f'--{x[0]}', *shlex.split(x[1])) for x in tokens]
            tokens = reduce(lambda x, y: x + y, tokens)
            parser.parse_args(tokens, namespace)



def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--name', type=str, help='name')
    parser.add_argument('--message', type=str, help='message')
    parser.add_argument('--count', type=int, help='count')
    parser.add_argument('--file', type=open, action=LoadFromFile)
    
    args = parser.parse_args(['--name', 'ABC'])
    print(args)

    args = parser.parse_args(['--name', 'ABC', '--message', 'Hello World', '--count', '2'])
    print(args)

    args = parser.parse_args(['--file', './args'])
    print(args)


if __name__ == '__main__':
    main()
