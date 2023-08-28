

def main():
    dict = {'a': 1, 'b': 'b is b', 'c': False}

    dict2 = {k: '{}'.format(v) for k, v in dict.items()}

    print(dict)
    print(dict2)


if __name__ == '__main__':
    main()
