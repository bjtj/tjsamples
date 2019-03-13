from flask import Flask, render_template, request, Response, g
from neo4j import GraphDatabase
import argparse
import json
try:
    import ConfigParser as configparser
except Exception:
    import configparser


parser = configparser.ConfigParser()
parser.read('config.ini')

uri = parser.get('neo4j', 'uri')
username = parser.get('neo4j', 'username')
password = parser.get('neo4j', 'password')


app = Flask(__name__)
driver = GraphDatabase.driver(uri, auth=(username, password))

def get_db():
    if not hasattr(g, 'neo4j_db'):
        g.neo4j_db = driver.session()
    return g.neo4j_db


@app.teardown_appcontext
def close_db(error):
    if hasattr(g, 'neo4j_db'):
        g.neo4j_db.close()


@app.route('/')
def index():
    return 'welcome'


@app.route('/vis')
def vis():
    return render_template('vis.html')


@app.route("/graph")
def get_graph():
    db = get_db()
    results = db.run("MATCH (m:Movie)<-[:ACTED_IN]-(a:Person) "
             "RETURN m.title as movie, collect(a.name) as cast "
             "LIMIT {limit}", {"limit": request.args.get("limit", 100)})

    # print('resutls type:', type(results))
    # resutls type: <class 'neo4j.BoltStatementResult'>

    nodes = []
    rels = []
    i = 0
    for record in results:

        # print('record type:', type(record))
        # record type: <class 'neo4j.Record'>

        nodes.append({"title": record["movie"], "label": "movie"})
        target = i
        i += 1
        for name in record['cast']:
            actor = {"title": name, "label": "actor"}
            try:
                source = nodes.index(actor)
            except ValueError:
                nodes.append(actor)
                source = i
                i += 1
            rels.append({"source": source, "target": target})
    return Response(json.dumps({"nodes": nodes, "links": rels}),
                    mimetype="application/json")    


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--host', type=str, default='0.0.0.0')
    parser.add_argument('--port', type=int, default=8080)
    args = parser.parse_args()
    app.run(host=args.host, port=args.port, debug=True)

if __name__ == '__main__':
    main()
