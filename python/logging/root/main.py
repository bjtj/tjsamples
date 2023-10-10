import logging
from logging import FileHandler

def _get_file_handler():
    handler = FileHandler('./.log/out.log')
    handler.setFormatter(logging.Formatter('%(asctime)s %(name)s --- %(levelname)s : %(message)s'))
    return handler

def _set_root_logger():
    root_logger = logging.getLogger()
    handler = _get_file_handler()
    root_logger.addHandler(handler)


def main():

    logging.basicConfig(handlers=[_get_file_handler()])
    _set_root_logger()
    
    logger = logging.getLogger('log1')
    logger.setLevel(logging.DEBUG)
    logger.debug('hello')

    logger = logging.getLogger('log2')
    logger.setLevel(logging.DEBUG)
    logger.debug('hello')


if __name__ == '__main__':
    main()
