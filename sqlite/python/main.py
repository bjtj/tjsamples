#!/usr/bin/env python

import sqlite3
import datetime
import time

def example1():
    conn = sqlite3.connect('example.db')
    c = conn.cursor()
    c.execute('''CREATE TABLE IF NOT EXISTS stocks
    (date text, trans text, symbol text, qtr real, price real)''')
    c.execute("INSERT INTO stocks VALUES ('2006-01-05', 'BUY', 'RHAT', 100, 35.14)")
    conn.commit()
    c.execute('SELECT * FROM stocks WHERE symbol=?', ('RHAT',))
    print(c.fetchone())
    for row in c.execute('SELECT * FROM stocks ORDER BY price'):
        print(row)
    conn.close()

    
def example2():
    def adapt_datetime(ts):
        return time.mktime(ts.timetuple())
    sqlite3.register_adapter(datetime.datetime, adapt_datetime)
    con = sqlite3.connect(":memory:")
    cur = con.cursor()
    now = datetime.datetime.now()
    cur.execute("select ?", (now,))
    print(cur.fetchone()[0])


def example3():
    def adapt_datetime(ts):
        return time.mktime(ts.timetuple())
    sqlite3.register_adapter(datetime.datetime, adapt_datetime)
    con = sqlite3.connect(":memory:")
    cur = con.cursor()
    cur.execute('CREATE TABLE tab1 (str text)')
    cur.execute('SELECT * FROM tab1')
    print(cur.fetchone())



def main():
    example1()
    example2()
    example3()

if __name__ == '__main__':
    main()
