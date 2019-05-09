try:
    import ConfigParser as configparser
except Exception:
    import configparser

import os


def set_config(filename):
    parser = configparser.ConfigParser()
    try:
        parser['myconfig'] = {'name1': 'value1',
                              'name2': 'value2',}
    except Exception:
        parser.add_section('myconfig')
        parser.set('myconfig', 'name1', 'value1')
        parser.set('myconfig', 'name2', 'value2')
    with open(filename, 'w') as fout:
        parser.write(fout)


def main():
    parser = configparser.ConfigParser()
    print(parser.read('no-exists'))
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

    print('-- set config --')
    set_config('temp.ini')
    print(open('temp.ini', 'r').read())
    os.remove('temp.ini')

if __name__ == '__main__':
    main()
