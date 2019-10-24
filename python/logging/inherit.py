import logging
from mylog import log

def main():

    # 
    
    logger = logging.getLogger('inherit')
    
    print('-- log() --')
    log()

    # 

    formatter = logging.Formatter('%(asctime)s - %(name)s - %(levelname)s - %(message)s')
    handler = logging.StreamHandler()
    handler.setFormatter(formatter)
    logger.addHandler(handler)

    logger.setLevel(logging.DEBUG)
    print('-- log() --')
    log()

    
    #
    
    logger = logging.getLogger('mylog')
    formatter = logging.Formatter('%(asctime)s - %(name)s - %(levelname)s - %(message)s')
    ch = logging.StreamHandler()
    ch.setFormatter(formatter)
    logger.addHandler(ch)

    logger.setLevel(logging.DEBUG)
    
    print('-- log() --')
    log()

    
    # 

    logging.basicConfig(level=logging.DEBUG,
                    format='[%(asctime)s] %(levelname).1s %(message)s',
                    datefmt='%Y-%m-%d %H:%M:%S')

    print('-- log() --')
    log()

if __name__ == '__main__':
    main()

