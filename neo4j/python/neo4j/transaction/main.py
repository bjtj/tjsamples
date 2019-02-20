# https://neo4j.com/docs/driver-manual/1.7/sessions-transactions/#driver-transactions
# https://neo4j.com/docs/api/python-driver/1.7/

from neo4j import GraphDatabase
from getpass import getpass

def prompt(msg):
    try:
        return raw_input(msg)
    except Exception:
        return input(msg)


def _create_person_node(tx, name):
    tx.run("CREATE (a:Person {name: $name})", name=name)
    return None

def _match_person_node(tx, name):
    ret = tx.run("MATCH (a:Person {name: $name}) RETURN count(a)", name=name)
    return ret.single()[0]

    
def main():
    uri = prompt('uri: ')
    username = prompt('username: ')
    password = getpass('password: ')

    driver = GraphDatabase.driver(uri, auth=(username, password))

    name = 'Steve'
    with driver.session() as session:
        session.write_transaction(_create_person_node, name)
        print(session.read_transaction(_match_person_node, name))

    driver.close()
    

if __name__ == '__main__':
    main()
