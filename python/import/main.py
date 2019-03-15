import sys
sys.path = ['./mod'] + sys.path
import hello

def main():
    print(hello)
    print(hello.__file__)
    hello.hello()

if __name__ == '__main__':
    main()
