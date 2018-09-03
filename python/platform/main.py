import os
import platform


def main():
    print('source path: {}'.format(os.path.dirname(os.path.abspath(__file__))))
    print('__file__: {}'.format(__file__))
    
    print('os.name: {}'.format(os.name))
    print('platform.system(): {}'.format(platform.system()))
    print('platform.release(): {}'.format(platform.release()))
    

if __name__ == '__main__':
    main()
