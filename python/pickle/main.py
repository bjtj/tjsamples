import pickle
import os


class Value:
    def __init__(self, val):
        self.val = val

    def __str__(self):
        return 'value: {}'.format(self.val)


class Obj:
    def __init__(self, lst, msg, val):
        self.lst = lst
        self.msg = msg
        self.val = val

    def __str__(self):
        return 'list: {}, msg: {}, value: {}'.format(self.lst, self.msg, self.val)


def main():
    obj = Obj([1,2,3], 'hello', Value(1.2))
    with open('dump.pkl', 'wb') as f:
        pickle.dump(obj, file=f)

    with open('dump.pkl', 'rb') as f:
        obj = pickle.load(f)
        print(obj)

    os.remove('dump.pkl')

if __name__ == '__main__':
    main()
