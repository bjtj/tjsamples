from enum import Enum


def test1():

    print('=== test1 ===')
    
    class Color(Enum):
        RED = 'color.red'
        BLUE = 'color.blue'

    color = Color.RED
    print(color)                # Color.RED
    print(color.name)           # RED
    print(color.value)          # color.red
    
    print('color == Color.RED? {}'.format(color == Color.RED)) # True
    print('"color.red" == Color.RED? {}'.format('color.red' == Color.RED)) # False
    print('"color.red" == Color.RED.value? {}'.format('color.red' == Color.RED.value)) # True


def test2():

    print('=== test2 ===')
    
    class Color(str, Enum):
        RED = 'color.red'
        BLUE = 'color.blue'

    color = Color.RED
    print(color)                # Color.RED
    print(color.name)           # RED
    print(color.value)          # color.red
    
    print('color == Color.RED? {}'.format(color == Color.RED)) # True
    print('"color.red" == Color.RED? {}'.format('color.red' == Color.RED)) # True
    print('"color.red" == Color.RED.value? {}'.format('color.red' == Color.RED.value)) # True


def main():
    test1()
    test2()


if __name__ == '__main__':
    main()
