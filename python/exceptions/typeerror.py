
def myfunc(arg1):
    print(arg1)

def main():
    myfunc('a')

    try:
        myfunc('a', 'b')
    except TypeError as e:
        print('TypeError', e)

if __name__ == '__main__':
    main()
    
