#!/usr/bin/env python

def main():
    with open('.empty', 'w') as f:
        pass

    with open('.empty', 'r') as f:
        assert not f.readline()

    with open('.not-empty', 'w') as f:
        f.write('hello')

    with open('.not-empty', 'r') as f:
        assert f.readline()


if __name__ == '__main__':
    main()
