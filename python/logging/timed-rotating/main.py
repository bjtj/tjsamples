import logging
import os
from logging.handlers import TimedRotatingFileHandler
from time import time, sleep


def _init_logger(log_path):
    logger = logging.getLogger('timed-rotating')
    handler = TimedRotatingFileHandler(os.path.join(log_path, '.out.log'), when='M', backupCount=5)
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
    logger.debug('-- Start of program --')

    for i in range(1 * 512):
        logger.debug('Index: %d', i)
        sleep(0.5)

    logger.debug('-- End of program --')
        

if __name__ == '__main__':
    main()
