#!/usr/bin/env python

import logging


def main():
    logger = logging.getLogger('logging-test')
    logger.setLevel(logging.DEBUG)

    fh = logging.FileHandler('out.log')
    fh.setLevel(logging.DEBUG)

    ch = logging.StreamHandler()
    ch.setLevel(logging.ERROR)

    formatter = logging.Formatter('%(asctime)s - %(name)s - %(levelname)s - %(message)s')
    fh.setFormatter(formatter)
    ch.setFormatter(formatter)

    logger.addHandler(fh)
    logger.addHandler(ch)

    logger.debug('hello')
    logger.error('bye')


if __name__ == '__main__':
    main()
