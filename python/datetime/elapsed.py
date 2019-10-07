import time

def check_elapsed(foo):
    def _func():
        t = time.time()
        ret = foo()
        d = time.time() - t
        print('{:.0f} ms.'.format(d * 1000))
        return ret

    return _func
    

@check_elapsed
def doit():
    time.sleep(1.5)


def main():
    doit()
    

if __name__ == '__main__':
    main()
