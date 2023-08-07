import redis
from time import time


def main():
    conn = redis.Redis(host='localhost', port=6379, db=0)
    mystream_key = 'mystream'
    for i in range(0, 10):
        conn.xadd(mystream_key, {'ts': time(), 'v': i})
    ret = conn.xread(count=2, streams={ mystream_key: 0 })
    print(ret)

    for id, item in ret[0][1]:
        print('ID: {} -- {}'.format(id, item))

    # get stream keys
    keys = conn.scan(0, _type='stream')
    print(keys)

    # consume stream
    consume(conn, mystream_key)

    # remove stream keyp
    conn.delete(mystream_key)


def consume(conn, stream_key):
    last_id = 0
    while True:
        ret = conn.xread(count=2, block=1000, streams={ stream_key: last_id })
        if not ret:
            print('empty stream')
            break

        items = ret[0][1]

        for id, item in items:
            last_id = id
            print('[{}] {}'.format(id, item))


if __name__ == '__main__':
    main()
