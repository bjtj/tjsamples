# https://stackoverflow.com/a/1984346

class DatabaseConnection(object):

    def num(self):
        return self._conn
    
    def __enter__(self):
        self._conn = 1
        return self

    def __exit__(self, type, value, traceback):
        self._conn = 0


def main():
    with DatabaseConnection() as conn:
        print(conn.num())

    print(conn.num())

if __name__ == '__main__':
    main()
