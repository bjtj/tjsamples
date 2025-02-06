import psycopg

def main():
    with psycopg.connect('dbname=test user=testuser password=pass') as conn:
        print(conn)

        with conn.cursor() as cur:
            cur.execute("""
            CREATE TABLE test (
                id serial PRIMARY KEY,
                num integer,
                data text)
            """)

            cur.execute(
            "INSERT INTO test (num, data) VALUES (%s, %s)",
            (100, "abc'def"))

            cur.execute("SELECT * FROM test")
            print(cur.fetchone())

            for record in cur:
                print(record)

            conn.commit()

            cur.execute('DROP TABLE test')


if __name__ == '__main__':
    main()

