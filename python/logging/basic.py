#!/usr/bin/env python

"""basic
"""

import logging


logging.basicConfig(level=logging.DEBUG,
                    format='[%(asctime)s] %(levelname).1s %(message)s',
                    datefmt='%Y-%m-%d %H:%M:%S')

logger = logging.getLogger(__name__)
logger.setLevel(logging.DEBUG)


def main():
    """main
    """
    logger.debug('hello')
    name = 'TJ'
    logger.debug('hello %s', name)
    logger.debug('%.2f', 1.23456789)
    logger.debug('%d', 123456789)
    logger.debug('%05d', 12)
    logger.debug('%05x', 12)
    logger.debug('%05X', 0xff)

if __name__ == '__main__':
    main()
