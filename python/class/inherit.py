

class A:
    def __init__(self):
        print('A')

    def hello(self):
        print('Hello from A')


class B(A):
    # https://stackoverflow.com/a/10483204/5676460
    def __init__(self):
        # super()                 # python3
        A.__init__(self)        # old style (python2 and python3)
        print('B')

    def hello(self):
        # super().hello()
        A.hello(self)
        print('Hello from B')



def main():
    print(' == A() == ')
    a = A()
    a.hello()
    print(' == B() == ')
    b = B()
    b.hello()

if __name__ == '__main__':
    main()
