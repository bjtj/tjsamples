import logging


def main():
    # SETUP
    logger = logging.getLogger('format-pid')
    logger.setLevel(logging.DEBUG)
    handler = logging.StreamHandler()
    handler.setLevel(logging.DEBUG)
    handler.setFormatter(logging.Formatter('%(asctime)s %(process)8d %(name)s --- %(levelname)s : %(message)s'))
    logger.addHandler(handler)

    # LOG
    logger.debug('Hello')
    logger.debug('Bye')

if __name__ == '__main__':
    main()
