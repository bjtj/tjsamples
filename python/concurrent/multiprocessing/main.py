from multiprocessing import Process, Pipe

def foo(conn):
    conn.send('hello')

parent_conn, child_conn = Pipe()
proc = Process(target = foo, args = (child_conn, ))
proc.start()

print(parent_conn.recv())

proc.join()
