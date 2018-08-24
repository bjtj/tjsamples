import os
from flask import Flask, render_template, request
import argparse
from app.mypage import mypage


app = Flask(__name__)
app.register_blueprint(mypage, url_prefix='/pages')

lst = ['item1', 'item2', 'item3']

@app.route("/")
def index():
    return render_template('index.html')


@app.route("/post", methods=['post'])
def post():
    text = request.form.get('text')
    lst.append(text)
    return render_template('index.html', var=text, lst=lst)


@app.route('/list')
def list():
    return render_template('index.html', lst=lst)


@app.route('/del', methods=['post'])
def delete():
    idx = int(request.form.get('idx')) - 1
    print(idx)
    del lst[idx]
    return render_template('index.html', lst=lst)


class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def hello(self):
        return 'Hello, {}!'.format(self.name)


@app.route('/person')
def person():
    return render_template('person.html',
                           person = Person('Steve', 30))


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--host', type=str, default='127.0.0.1', help='host name')
    parser.add_argument('--port', type=int, default=8080, help='port number')
    args = parser.parse_args()

    # https://stackoverflow.com/a/13318415
    print('== RULES ==')
    for rule in app.url_map.iter_rules():
        print(rule)
    
    app.run(host=args.host, port=args.port)
    

if __name__ == '__main__':
    main()
