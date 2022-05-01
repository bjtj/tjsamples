import stomp
import sys
import time


conn = stomp.Connection()
conn.set_listener('', stomp.PrintingListener())
conn.connect('admin', 'password', wait=True)
conn.subscribe('/queue/test', 123)
conn.send(body='hello'.join(sys.argv[1:]), destination='/queue/test')

while True:
    time.sleep(1)

conn.disconnect()
