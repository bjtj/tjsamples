def main():
    d = {}

    d['x'] = 1
    d.pop('x')

    try:
        d.pop('x')
    except KeyError:
        print('KeyError!')
    

if __name__ == '__main__':
    main()
