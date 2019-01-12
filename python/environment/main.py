import sys


def main():

    print(sys)

    print(sys.version_info)

    print(sys.hexversion)

    print('python {}'.format(sys.version_info[0]))
    
    for k, v in globals().items():
        print('{}: {}'.format(k, v))

if __name__ == '__main__':
    main()
