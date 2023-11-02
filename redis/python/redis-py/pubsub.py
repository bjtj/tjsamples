import redis
from time import sleep

def handler(msg):
    print('[RECV] {}'.format(msg))


def main():
    conn = redis.from_url('redis://127.0.0.1:6379')
    conn.ping()

    pubsub = conn.pubsub()
    pubsub.subscribe(**{'test-channel': handler})
    thread = pubsub.run_in_thread(sleep_time = 0.001)

    conn.publish('test-channel', 'Hello World!')

    sleep(1)

    thread.stop()
    thread.join()

    pubsub.close()
    

if __name__ == '__main__':
    main()
