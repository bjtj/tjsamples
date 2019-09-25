import redis
import time
import argparse


def my_handler(msg):
    print('[my handler] RECV msg: {}'.format(msg))
    # e.g.
    # [my handler] msg: {'pattern': None, 'type': 'message', 'channel': 'my-channel', 'data': 'hello'}


def main():

    parser = argparse.ArgumentParser()
    parser.add_argument('--host', default='localhost', help='host name')
    parser.add_argument('--port', default=6379, type=int, help='port number')
    args = parser.parse_args()
    
    conn = redis.StrictRedis(host=args.host, port=args.port, db=0)
    pubsub = conn.pubsub()
    pubsub.subscribe(**{'my-channel': my_handler})
    thread = pubsub.run_in_thread(sleep_time = 0.001)

    print('sleep 5 secs...')
    time.sleep(5)

    thread.stop()
    thread.join()
    pubsub.close()
    print('done.')

if __name__ == '__main__':
    main()
