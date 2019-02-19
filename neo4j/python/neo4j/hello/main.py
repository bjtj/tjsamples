from neo4j import GraphDatabase
import getpass


class HelloWorldExample:
    def __init__(self, uri, user, password):
        self._driver = GraphDatabase.driver(uri, auth=(user, password))

    def close(self):
        self._driver.close()

    def print_greeting(self, message):
        with self._driver.session() as session:
            greeting = session.write_transaction(self._create_and_return_greeting, message)
            print(greeting)

    @staticmethod
    def _create_and_return_greeting(tx, message):
        result = tx.run("CREATE (a:Greeting) "
                        "SET a.message = $message "
                        "RETURN a.message + ', from node ' + id(a)", message=message)
        return result.single()[0]



def prompt(msg):
    try:
        return raw_input(msg)
    except:
        return input(msg)


def main():
    url = prompt('url: ')
    user = prompt('username: ')
    password = getpass.getpass('password: ')
    ex = HelloWorldExample(url, user, password)
    ex.print_greeting('Hello World!')
    ex.close()

if __name__ == '__main__':
    main()
