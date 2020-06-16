

class Prop:
    def __init__(self, val):
        self.val = val

    def __repr__(self):
        return f'Prop({self.val!r})'

    def __eq__(self, other):
        return self.val == other.val


class Obj:
    def __init__(self, sval, ival, prop):
        self.sval = sval
        self.ival = ival
        self.prop = prop

    def copy(self):
        return eval(repr(self))

    def __repr__(self):
        return f'Obj({self.sval!r}, {self.ival!r}, {self.prop!r})'

    def __eq__(self, other):
        return self.sval == other.sval and self.ival == other.ival and self.prop == other.prop


def main():
    obj1 = Obj('hello', 1, Prop('hello'))
    obj2 = obj1.copy()

    assert obj1 == obj2

    obj2.ival += 1

    assert obj1 != obj2

    obj2.ival = obj1.ival

    assert obj1 == obj2

    obj2.prop.val += 'x'

    assert obj1 != obj2

if __name__ == '__main__':
    main()
