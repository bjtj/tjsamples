from multiprocessing import Process, Queue

def f(qu):
    qu.put([42, None, 'hello'])
    
def main():
    qu = Queue()
    proc = Process(target=f, args=(qu,))
    proc.start()
    print(qu.get())
    proc.join()

if __name__ == '__main__':
    main()
