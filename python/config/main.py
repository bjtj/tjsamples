import ConfigParser

def main():
    parser = ConfigParser.ConfigParser()
    print(parser.read('conf.ini'))
    print(parser.get('default', 'name'))
    print(parser.get('default', 'job'))
    try:
        print(parser.get('default', 'noname'))
    except Exception:
        pass
    print(parser.get('default', 'msg'))
    print(parser.get('default', 'msg', 1))
    

if __name__ == '__main__':
    main()
