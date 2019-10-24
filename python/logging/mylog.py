import logging


logger = logging.getLogger('mylog')

def log():
    logger.critical('ciritical')
    logger.error('error')
    logger.warning('warning')
    logger.info('info')
    logger.debug('debug')


def main():
    log()

if __name__ == '__main__':
    main()
