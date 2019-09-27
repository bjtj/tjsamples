from multiprocessing import Process, Pipe


def f(conn):
    conn.send([42, None, 'hello'])
    conn.close()


def main():
    parent_conn, child_conn = Pipe()
    proc = Process(target=f, args=(child_conn,))
    proc.start()
    print(parent_conn.recv())
    proc.join()


if __name__ == '__main__':
    main()

