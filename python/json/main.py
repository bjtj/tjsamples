import os
import json
from json import JSONEncoder, JSONDecoder

# JSON Serializable
# ----
# * https://stackoverflow.com/a/3768975
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def __str__(self):
        return 'Name: {}, Age: {}'.format(self.name, self.age)

    def __repr__(self):
        return 'Person("{}", {})'.format(self.name, self.age)

class PersonEncoder(JSONEncoder):
    def default(self, person):
        return person.__dict__


def basic():
    obj = json.loads('{}')
    obj['name'] = 'my name'
    obj['msg'] = 'message'
    print(str(obj))


def main():

    basic()
    
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

    # ----

    dump = json.dumps({'person' : Person('steve', 30).__dict__})
    print(dump)

    dump = json.dumps({'person' : Person('steve', 30)}, cls=PersonEncoder)
    print(dump)

    dump = json.dumps({'person' : Person('steve', 30)}, cls=PersonEncoder, indent=4)
    print(dump)

    def from_json(json_object):
        if 'name' in json_object and 'age' in json_object:
            person = Person(json_object['name'], int(json_object['age']))
            print('person: {}'.format(person))
            return person
        return json_object

    json_obj = JSONDecoder(object_hook = from_json).decode(dump)
    print(json_obj)

    print('name: {}'.format(json_obj['person'].name))
    print('age: {}'.format(json_obj['person'].age))

    print('{}'.format(json.dumps(['a', 'b'])))
    print('{}'.format(json.dumps('hello')))


if __name__ == '__main__':
    main()
