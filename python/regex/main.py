import os
import sys
import re

def print_match(match):
    if match is None:
        print('None')
    print('<Match: {}, groups={}>'.format(match.group(), match.groups()))


def match(pattern, string):
    prog = re.compile(pattern)
    return prog.match(string)
    

def main():
    print_match(match('.+@.+\.com', 'hello@xxx.com'))

if __name__ == '__main__':
    main()
