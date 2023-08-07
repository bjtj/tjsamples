import redis

def main():
    r = redis.Redis(host='localhost', port=6379, db=0)
    r.set('foo', 'bar')
    ret = r.get('foo')
    print(ret)


if __name__ == '__main__':
    main()
