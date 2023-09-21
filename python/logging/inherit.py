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

# ** OUTPUT **
# ------------
# $ python inherit.py
# 
# ciritical
# error
# warning
# ciritical
# error
# warning
# 2023-09-21 10:33:31,945 - mylog - CRITICAL - ciritical
# 2023-09-21 10:33:31,945 - mylog - ERROR - error
# 2023-09-21 10:33:31,945 - mylog - WARNING - warning
# 2023-09-21 10:33:31,945 - mylog - INFO - info
# 2023-09-21 10:33:31,945 - mylog - DEBUG - debug
# 2023-09-21 10:33:31,945 - mylog - CRITICAL - ciritical
# [2023-09-21 10:33:31] C ciritical
# 2023-09-21 10:33:31,945 - mylog - ERROR - error
# [2023-09-21 10:33:31] E error
# 2023-09-21 10:33:31,946 - mylog - WARNING - warning
# [2023-09-21 10:33:31] W warning
# 2023-09-21 10:33:31,946 - mylog - INFO - info
# [2023-09-21 10:33:31] I info
# 2023-09-21 10:33:31,946 - mylog - DEBUG - debug
# [2023-09-21 10:33:31] D debug
# -- log() --
# -- log() --
# -- log() --
# -- log() --


# ** OUTPUT **
# ------------
# $ python -u inherit.py
# 
# -- log() --
# ciritical
# error
# warning
# -- log() --
# ciritical
# error
# warning
# -- log() --
# 2023-09-21 10:35:44,953 - mylog - CRITICAL - ciritical
# 2023-09-21 10:35:44,953 - mylog - ERROR - error
# 2023-09-21 10:35:44,953 - mylog - WARNING - warning
# 2023-09-21 10:35:44,953 - mylog - INFO - info
# 2023-09-21 10:35:44,953 - mylog - DEBUG - debug
# -- log() --
# 2023-09-21 10:35:44,953 - mylog - CRITICAL - ciritical
# [2023-09-21 10:35:44] C ciritical
# 2023-09-21 10:35:44,953 - mylog - ERROR - error
# [2023-09-21 10:35:44] E error
# 2023-09-21 10:35:44,953 - mylog - WARNING - warning
# [2023-09-21 10:35:44] W warning
# 2023-09-21 10:35:44,953 - mylog - INFO - info
# [2023-09-21 10:35:44] I info
# 2023-09-21 10:35:44,953 - mylog - DEBUG - debug
# [2023-09-21 10:35:44] D debug
