
class Obj:
    def __init__(self, value):
        self.value = value

    def __str__(self) -> str:
        return 'value: ' + str(self.value)

    def __repr__(self) -> str:
        return self.__str__()

def main():
    lst = [Obj(0)] * 3
    print(lst) # [value: 0, value: 0, value: 0]

    lst[0].value = 1
    print(lst) # [value: 1, value: 1, value: 1]

    lst = [Obj(0) for _ in range(3)]
    print(lst) # [value: 0, value: 0, value: 0]

    lst[0].value = 1
    print(lst) # [value: 1, value: 0, value: 0]

if __name__ == '__main__':
    main()