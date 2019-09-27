# https://stackoverflow.com/a/7585619

def main():
    print('hello'.encode('utf-8')) # to bytes
    print('hello'.encode('utf-8').decode('utf-8')) # to string

if __name__ == '__main__':
    main()
