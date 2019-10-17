from collections import OrderedDict
import sys

python_ver = sys.version_info[0]


def main():
    table = {}

    for i in range(24):
        key = chr(ord('a') + i)
        value = chr(ord('A') + i)
        table[key] = value

    print(len(table))
    print(table)

    assert('a' in table)
    if 'a' in table:
        del table['a']
    assert('a' not in table)
    if 'a' in table:
        del table['a']

    ordered_table = OrderedDict()

    ordered_table.update(table)

    print(len(ordered_table))
    print(ordered_table)
    
    if python_ver == 2:
        print(ordered_table.keys()[-1])
    elif python_ver == 3:
        print(list(ordered_table.keys())[-1])
        

if __name__ == '__main__':
    main()


