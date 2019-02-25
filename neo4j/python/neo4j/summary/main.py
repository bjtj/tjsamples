from neo4j import GraphDatabase
from getpass import getpass

def prompt(msg):
    try:
        return raw_input(msg)
    except Exception:
        return input(msg)


def print_summary(summary):
    print('counters: {}'.format(summary.counters))
    print('notifications: {}'.format(summary.notifications))
    print('parameters: {}'.format(summary.parameters))
    print('plan: {}'.format(summary.plan))
    print('profile: {}'.format(summary.profile))
    print('protocol_version: {}'.format(summary.protocol_version))
    print('result_available_after: {}'.format(summary.result_available_after))
    print('result_consumed_after: {}'.format(summary.result_consumed_after))
    print('server: {}'.format(summary.server))
    print('statement: {}'.format(summary.statement))
    print('statement_type: {} (r: read-only, wr: read/write)'.format(summary.statement_type))


def main():
    uri = prompt('uri: ')
    username = prompt('username: ')
    password = getpass('password: ')
    driver = GraphDatabase.driver(uri, auth=(username, password))

    with driver.session() as session:
        ret = session.run('MATCH x=(n)-[r]->(p) RETURN x')
        print(ret.summary())
        print_summary(ret.summary())


    driver.close()

if __name__ == '__main__':
    main()
