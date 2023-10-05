
class A:
    def __init__(self, name):
        self._name = name


    def __call__(self, *args):
        print('Hello {} with {}'.format(self._name, args))



def main():
    a = A('Steve')

    a()                         # OUTPUT --  Hello Steve with ()
    a('x')                      # OUTPUT --  Hello Steve with ('x',)

if __name__ == '__main__':
    main()
