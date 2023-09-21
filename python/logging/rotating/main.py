import logging
import os
from logging.handlers import RotatingFileHandler


def _init_logger(log_path):
    logger = logging.getLogger('rotating')
    handler = RotatingFileHandler(os.path.join(log_path, '.out.log'), maxBytes=5 * 1024, backupCount=10)
    handler.setFormatter(logging.Formatter('%(asctime)s %(name)s --- %(levelname)s : %(message)s'))
    handler.setLevel(logging.DEBUG)
    logger.addHandler(handler)
    logger.setLevel(logging.DEBUG)
    return logger

def main():
    here = os.path.abspath(os.path.dirname(__file__))
    log_path = os.path.join(here, '.log')

    if not os.path.exists(log_path):
        os.makedirs(log_path)

    logger = _init_logger(log_path)
    logger.debug('-- start of program --')

    for i in range(1 * 512):
        logger.debug('Index: %d', i)

    logger.debug('-- end of program --')
        

if __name__ == '__main__':
    main()
