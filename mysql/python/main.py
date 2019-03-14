import mysql.connector
import argparse


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--host', type=str, default='localhost')
    parser.add_argument('--user', type=str, default='root')
    parser.add_argument('--database', type=str)
    parser.add_argument('--passwd', type=str)
    parser.add_argument('--query', type=str)
    args = parser.parse_args()
    mydb = mysql.connector.connect(host=args.host,
                                   user=args.user,
                                   passwd=args.passwd,
                                   database=args.database)
    cursor = mydb.cursor()
    cursor.execute(args.query)
    mydb.commit()
    print(cursor.rowcount)

if __name__ == '__main__':
    main()
