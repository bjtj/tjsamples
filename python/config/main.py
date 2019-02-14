try:
    import ConfigParser as configparser
except Exception:
    import configparser

def main():
    parser = configparser.ConfigParser()
    print(parser.read('conf.ini'))
    print(parser.get('default', 'name'))
    print(parser.get('default', 'job'))
    try:
        print(parser.get('default', 'noname'))
    except Exception as e:
        print('error: {}'.format(e))
        
    print(parser.get('default', 'msg'))
    
    try:
        print(parser.get('default', 'msg', 1))
    except Exception as e:
        print('error: {}'.format(e))
    
    

if __name__ == '__main__':
    main()
