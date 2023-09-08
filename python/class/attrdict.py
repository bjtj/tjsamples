

class Obj:
    def __init__(self):
        self.name = 'obj'


class AttrDict(dict):
    """
    https://stackoverflow.com/a/14620633
    """
    def __init__(self, *args, **kwargs):
        super(AttrDict, self).__init__(*args, **kwargs)
        self.__dict__ = self

        self.name = 'attr-dict'


def main():

    obj = Obj()
    print(obj)                  # <__main__.Obj object at 0x0000021F448BBE80>
    print(obj.name)             # obj
    # print(obj['name'])          # <---- TypeError: 'Obj' object is not subscriptable
    print(obj.__dict__)         # {'name': 'obj'}
    print(list(obj.__dict__.keys())) # ['name']

    a = AttrDict()
    print(a)                    # {'name': 'attr-dict'}

    a = AttrDict({'a': 1, 'b': 2})
    print(a)                    # {'a': 1, 'b': 2, 'name': 'attr-dict'}

    print(a.a)                  # 1
    print(a.b)                  # 2
    print(a.name)               # attr-dict
    print(a['name'])            # attr-dict

    print(a.items())

    # a.update({'items': [1,2,3]})
    # for k, v in a.items():      # <---- TypeError: 'list' object is not callable
    #     pass                    # never reached


if __name__ == '__main__':
    main()
