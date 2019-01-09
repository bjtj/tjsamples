import os
import argparse


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--name', type=str, default='hello', help='name value')
    parser.add_argument('--count', type=int, default=0, help='count value')
    parser.add_argument('--debug', action='store_true', help='debug mode flag')
    parser.add_argument('--choice', default='c', choices=['a', 'b', 'c'], help='choise one of (a b c)')
    parser.add_argument('--skip-exists')
    parser.add_argument('--skip_exists')
    args = parser.parse_args()
    print(args)
    args, unknown = parser.parse_known_args()
    print('{} {}'.format(args, unknown))

if __name__ == '__main__':
    main()

