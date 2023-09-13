from multiprocessing import Process

class MyProc(Process):
    def __init__(self, arg1):
        super(MyProc, self).__init__()
        self.arg1 = arg1

    def run(self):
        print('hello {}'.format(self.arg1))


def main():
    p = MyProc('arg1')
    p.start()
    p.join()


if __name__ == '__main__':
    main()
