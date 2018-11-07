

class Obj:
    count = 0
    def __init__(self):
        Obj.hello()
        Obj.countup()
        print(Obj.count)
    
    @staticmethod
    def hello():
        print('hello in static')

    @staticmethod
    def countup():
        Obj.count += 1


def main():
    Obj()
    Obj()


if __name__ == '__main__':
    main()
