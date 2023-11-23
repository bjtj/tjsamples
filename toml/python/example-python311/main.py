import sys
if not (sys.version_info.major >= 3 and sys.version_info.minor >= 11):
    print('[ERR] Required Python ^3.11')
    exit(1)

import tomllib
import toml
import datetime
from decimal import Decimal

def main():
    with open('sample.toml', 'rb') as f:
        parsed_toml = tomllib.load(f)
    print(parsed_toml)
    print(parsed_toml['title'])
    print(parsed_toml['owner']['name'])
    print(parsed_toml['database']['ports'])
    print(type(parsed_toml['database']['ports'])) # <class 'list'>
    print(len(parsed_toml['database']['ports']))  # 3

    parsed_toml['owner']['name'] += ' <== Good guy'

    print(parsed_toml['owner']['name'])

    with open('sample.out.toml', 'w') as f:
        toml.dump(parsed_toml, f)

    with open('sample.out.toml', 'rb') as f:
        print(tomllib.load(f))
    

    obj = {
        'message': 'hello world',
        'section': {
            'key1': 'value1',
            'key2': 'value2',
            'list': [1,2,3],
        }
    }

    with open('myobj.toml', 'w') as f:
        toml.dump(obj, f)
    
    with open('myobj.toml', 'rb') as f:
        assert(tomllib.load(f) == obj)


if __name__ == '__main__':
    main()
