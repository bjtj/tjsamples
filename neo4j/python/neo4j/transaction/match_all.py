# https://neo4j.com/docs/driver-manual/1.7/sessions-transactions/#driver-transactions
# https://neo4j.com/docs/api/python-driver/1.7/
# https://neo4j.com/docs/api/python-driver/1.7/types/graph.html

from neo4j import GraphDatabase
from getpass import getpass

def prompt(msg):
    try:
        return raw_input(msg)
    except Exception:
        return input(msg)


def _match_all_person(tx):
    ret = tx.run("MATCH x=(a:Person)-[r]->(p) RETURN x")
    return list(ret)

    
def print_relationship(rel):
    print('{} -[{}]-> {}'.format(rel.nodes[0]['name'], rel.type, rel.nodes[1]['name']))


def main():
    uri = prompt('uri: ')
    username = prompt('username: ')
    password = getpass('password: ')

    driver = GraphDatabase.driver(uri, auth=(username, password))

    with driver.session() as session:
        lst = session.read_transaction(_match_all_person)
        for item in lst:
            print_relationship(item['x'].relationships[0])

    driver.close()
    

if __name__ == '__main__':
    main()
