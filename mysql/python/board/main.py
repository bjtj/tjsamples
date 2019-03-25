import mysql.connector
from mysql.connector import pooling
import argparse
import os

try:
    import ConfigParser as configparser
except Exception:
    import configparser

dbconf = {}

def get_dbconf(config_file):
    global dbconf
    if dbconf:
        return dbconf
    if not os.path.exists(config_file):
        raise ValueError('Not Found -- "{}"'.format(config_file))
    ini_parser = configparser.ConfigParser()
    ini_parser.read(config_file)
    host = ini_parser.get('mysql', 'host')
    user = ini_parser.get('mysql', 'user')
    passwd = ini_parser.get('mysql', 'passwd')
    db = ini_parser.get('mysql', 'db')
    dbconf = {
        'host': host,
        'user': user,
        'passwd': passwd,
        'database': db
    }
    return dbconf


def get_connection_pool(dbconf, pool_name = None, pool_size = None):
    if pool_name is None and pool_size is None:
        raise ValueError('At least one of pool name or pool size must be specified')

    conf = dbconf
    if pool_name:
        conf['pool_name'] = pool_name
    if pool_size:
        conf['pool_size'] = pool_size

    conf['pool_reset_session'] = True

    return pooling.MySQLConnectionPool(**conf)


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--config', type=str, default='config.ini')
    parser.add_argument('--delete', action='store_true')
    parser.add_argument('--drop', action='store_true')
    args = parser.parse_args()

    pool = get_connection_pool(get_dbconf(args.config),
                               pool_name = 'mypool',
                               pool_size = 10)
    conn = pool.get_connection()
    cursor = conn.cursor()

    if args.drop:
        print('-- DROP TABLE --')
        cursor.execute('DROP TABLE IF EXISTS `board`')
    
    cursor.execute('CREATE TABLE IF NOT EXISTS `board` (id int(11) auto_increment, title text not null, body text not null, reg_date datetime not null, primary key(id));')

    if args.delete:
        print('-- DELETE ALL --')
        cursor.execute('DELETE FROM `board`')

    print('-- INSERT --')
    query = 'INSERT INTO `board` (title, body, reg_date) VALUES (%s, %s, now());'
    cursor.execute(query, ('Hello', 'Hello World!'))
    conn.commit()

    print('Last Row ID: {}'.format(cursor.lastrowid))

    cursor.execute('SELECT * FROM `board` ORDER BY `id` DESC LIMIT 10')
    ret = cursor.fetchall()
    print('-- SELECT --')
    for row in ret:
        print(row)
    
    conn.close()


if __name__ == '__main__':
    main()
