#!/usr/bin/env python
"""
"""
from collections import defaultdict


def main():
    d = defaultdict(lambda: [])
    d['a'].append(1)
    d['a'].append(1)
    d['a'].append(1)
    print(d['a'])
    assert 'a' in d
    assert 'b' not in d


if __name__ == '__main__':
    main()
