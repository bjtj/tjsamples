import logging
import os
from logging import FileHandler
import threading


def _get_logger(name, log_path):
    logger = logging.getLogger(name)
    handler = FileHandler(os.path.join(log_path, '.out.log'))
    handler.setFormatter(logging.Formatter('%(asctime)s %(name)s --- %(levelname)s : %(message)s'))
    handler.setLevel(logging.DEBUG)
    logger.addHandler(handler)
    logger.setLevel(logging.DEBUG)
    return logger


def _work_thread(name, logger):
    for i in range(100):
        logger.debug('worker %s -- idx: %d', name, i)


def main():
    here = os.path.abspath(os.path.dirname(__file__))
    log_path = os.path.join(here, '.log')
    if not os.path.exists(log_path):
        os.makedirs(log_path)

    logger1 = _get_logger('log1', log_path)
    logger2 = _get_logger('log2', log_path)

    logger1.debug('hello log1')
    logger2.debug('hello log2')


    th1 = threading.Thread(target=_work_thread, args=('thread1', logger1))
    th2 = threading.Thread(target=_work_thread, args=('thread2', logger2))
    th1.start()
    th2.start()

    th1.join()
    th2.join()

if __name__ == '__main__':
    main()

