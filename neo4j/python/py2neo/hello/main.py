from py2neo import Graph, Node, Relationship
from getpass import getpass


def prompt(msg, password=False):
    if password:
        return getpass(msg)
    try:
        return raw_input(msg)
    except Exception:
        return input(msg)

def default(x, d):
    return x if x else d


def main():
    bolt_url = default(prompt('bolt url(default=bolt://localhost:7687): '), 'bolt://localhost:7687')
    username = default(prompt('username(defalt=neo4j): '), 'neo4j')
    password = prompt('password: ', password=True)
    graph = Graph(bolt_url, user=username, password=password)

    graph.run('MATCH (n) DETACH DELETE n')
    
    tx = graph.begin()
    alice = Node("Person", name="Alice")
    tx.create(alice)
    bob = Node("Person", name="Bob")
    relationship = Relationship(alice, "KNOWS", bob)
    tx.create(relationship)
    tx.commit()

    for rel in graph.match(start_node=alice, rel_type="KNOWS"):
        print(rel.end_node()["name"])
    
    print(graph.exists(relationship))


    a = graph.find_one(label="Person", property_key="name", property_value="Alice")
    r = graph.match_one(start_node=a, rel_type="KNOWS")
    print(r.end_node()['name'])


if __name__ == '__main__':
    main()

