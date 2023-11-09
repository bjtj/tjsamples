import sqlite3
import json


def dict_to_str(d, depth=0, indent=2):
    s = ''
    if type(d) == dict:
        s = '{\n'
        for k, v in d.items():
            s += '{}{}: {}\n'.format(' ' * (depth + 1) * indent, k, dict_to_str(v, depth+1, indent) if type(v) == dict else v)
        s += '{}}}\n'.format(' ' * depth * indent)
    return s


def main():
    with open('countries.json', 'r') as f:
        countries = json.load(f)[1]
    
    conn = sqlite3.connect(':memory:')
    cur = conn.cursor()
    cur.execute('CREATE TABLE countries(id varchar(3), data json)')
    conn.commit()
    for country in countries:
        cur.execute('INSERT INTO countries VALUES (?, ?)', [country['id'], json.dumps(country)])
        conn.commit()

    res = cur.execute('SELECT * FROM countries')
    for record in res:
        print('*** RECORD-ID: {}'.format(record[0]))
        print(dict_to_str(json.loads(record[1]), indent=8))

    cur.execute("vacuum main into 'my.db'")
    conn.close()


if __name__ == '__main__':
    main()


