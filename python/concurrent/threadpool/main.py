from multiprocessing.dummy import Pool as ThreadPool
import time

def work(n):
    for i in range(n):
        print('{} - [{}] {}'.format(time.time(), n, i))
        time.sleep(0.5)

def map():
    pool = ThreadPool(3)
    nums = pool.map(work, range(1,6))
    print('close')
    pool.close()
    print('join')
    pool.join()


def map_async():
    pool = ThreadPool(3)
    nums = pool.map_async(work, range(1,6))
    print('close')
    pool.close()
    print('join')
    pool.join()


def apply():
    pool = ThreadPool(3)
    for i in range(3):
        pool.apply(work, (3, ))
    print('close')
    pool.close()
    print('join')
    pool.join()


def apply_async():
    pool = ThreadPool(3)
    for i in range(3):
        pool.apply_async(work, (3, ))
    print('close')
    pool.close()
    print('join')
    pool.join()


def main():
    print('-- map --')
    map()
    
    print('-- map_async --')
    map_async()
    
    print('-- apply --')
    apply()
    
    print('-- apply_async --')
    apply_async()


if __name__ == '__main__':
    main()
