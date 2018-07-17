import redis
import sys
import argparse


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--host', default='localhost', help='host name')
    parser.add_argument('--port', default=6379, type=int, help='port number')
    args, unknown = parser.parse_known_args()

    msg = unknown[0]
    
    conn = redis.StrictRedis(host=args.host, port=args.port, db=0)
    print('[publish] msg: {}'.format(msg))
    conn.publish('my-channel', msg)

if __name__ == '__main__':
    main()
