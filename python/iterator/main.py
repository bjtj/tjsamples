

class MyIterator:
    def __init__(self, lst):
        self.lst = lst
    
    def __iter__(self):
        self.max = len(self.lst)
        self.it = 0
        return self

    def __next__(self):
        if self.it < self.max:
            v = self.lst[self.it]
            self.it += 1
            return v
        else:
            raise StopIteration

    next = __next__             # for python2

def main():
    myiter = MyIterator([1,2,3])
    for item in myiter:
        print(item)

    for item in myiter:
        print(item)
    
if __name__ == '__main__':
    main()
