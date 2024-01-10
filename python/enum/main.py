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


def test3():
    class Color(str, Enum):
        RED = 'color.red'
        BLUE = 'color.blue'
        GREEN = 'color.green'

    print(list(Color))          # [<Color.RED: 'color.red'>, <Color.BLUE: 'color.blue'>, <Color.GREEN: 'color.green'>]
    print(list(Color)[0])
    print(list(Color)[0].name)  # RED
    print(list(Color)[0].value) # color.red

    for color in Color:
        print(color.name, color.value)            # RED color.red


def main():
    test1()
    test2()
    test3()


if __name__ == '__main__':
    main()
