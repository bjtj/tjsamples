import logging
from logging import FileHandler

root_logger = logging.getLogger()
handler = FileHandler('./.log/out.log')
handler.setFormatter(logging.Formatter('%(asctime)s %(name)s --- %(levelname)s : %(message)s'))
root_logger.addHandler(handler)


def main():
    logger = logging.getLogger('log1')
    logger.setLevel(logging.DEBUG)
    logger.debug('hello')

    logger = logging.getLogger('log2')
    logger.setLevel(logging.DEBUG)
    logger.debug('hello')


if __name__ == '__main__':
    main()
