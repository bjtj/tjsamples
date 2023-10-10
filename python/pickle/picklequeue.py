import os
import pickle
import queue


def main():

    q = queue.Queue()

    q.put(1)
    q.put(2)
    q.put(3)
    q.put(4)
    
    with open('myqueue.pkl', 'wb') as f:
        pickle.dump(q.queue, file=f)

    q.get()

    with open('myqueue.pkl', 'rb') as f:
        q.queue = pickle.load(f)

    while not q.empty():
        print(q.get())

    # OUTPUT:
    # -------
    # 1
    # 2
    # 3
    # 4

    os.remove('myqueue.pkl')
        

if __name__ == '__main__':
    main()
