#!/usr/bin/env python

import logging


def simple_file_handler():
    logger = logging.getLogger('SIMPLE FILE HANDLER')
    logger.setLevel(logging.DEBUG)
    handler = logging.FileHandler('.simple.log')
    handler.setLevel(logging.DEBUG)
    handler.setFormatter(logging.Formatter('%(asctime)s %(name)s --- %(levelname)s : %(message)s'))
    logger.addHandler(handler)
    logger.debug('Hello')
                      


def test():
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


def main():
    test()
    simple_file_handler()


if __name__ == '__main__':
    main()
