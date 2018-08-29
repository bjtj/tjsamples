import os
import json


def main():
    dump = json.dumps({})
    print(dump)

    dump = json.dumps({'a':'A'})
    print(dump)

    with open('out.json', 'w') as f:
        json.dump({'a':'A'}, f)

    with open('out.json', 'r') as f:
        json_obj = json.load(f)
        print(json_obj)
        print(type(json_obj))

    with open('out.json', 'r') as f:
        json_obj = json.loads(f.read())
        print(json_obj)
        print(type(json_obj))

if __name__ == '__main__':
    main()
