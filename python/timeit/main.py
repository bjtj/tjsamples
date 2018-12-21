import timeit


def main():
    ret = timeit.timeit('"-".join(str(n) for n in range(100))', number=10000)
    print('{} sec.'.format(ret))

    # https://stackoverflow.com/a/8220943
    setup = '''
import random
random.seed('slartibartfast')
s = [random.random() for i in range(1000)]
timsort = list.sort
'''
    m = min(timeit.Timer('a=s[:]; timsort(a)', setup=setup).repeat(7, 1000))
    print('Best: {} sec.'.format(m))

if __name__ == '__main__':
    main()
