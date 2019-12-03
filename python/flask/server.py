import os
from flask import Flask, render_template, request, Response, redirect, make_response, g, session, jsonify, send_from_directory, abort
import argparse
from app.mypage import mypage
from app.file import file
import json
from werkzeug.exceptions import NotFound

app = Flask(__name__)
app.register_blueprint(mypage, url_prefix='/pages')
app.register_blueprint(file)

app.secret_key = "your secret"

lst = ['item1', 'item2', 'item3']

# g.msg = 'Message!'

@app.before_first_request
def before_first_request():
    print('before_first_request')


idx = 0
    
@app.before_request
def before_request():
    global idx
    print('before_request')
    idx += 1
    g.greeting = 'Hello World!!! {}'.format(idx)


@app.errorhandler(404)
def handler_notfound(err):
    return render_template('404.html', message='Cannot access -- "{}"'.format(request.path)), 404

@app.errorhandler(500)
def handler_server_error(err):
    # https://stackoverflow.com/a/21301229/5676460
    return render_template('500.html', message=err.description)


@app.route("/")
def index():
    remote_addr = request.remote_addr
    remote_user = request.remote_user
    return render_template('index.html', bps = app.blueprints,
                           remote_addr = remote_addr,
                           remote_user = remote_user)


@app.route('/error')
def err():
    abort(500, 'Intended server error message')



@app.route("/post", methods=['post'])
def post():
    text = request.form.get('text')
    lst.append(text)
    return render_template('list.html', var=text, lst=lst)


@app.route('/list')
def list():
    return render_template('list.html', lst=lst)


@app.route('/del', methods=['post'])
def delete():
    idx = int(request.form.get('idx')) - 1
    print(idx)
    del lst[idx]
    return render_template('list.html', lst=lst)


class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def hello(self):
        return 'Hello, {}!'.format(self.name)


@app.route('/person')
def person():
    format = request.args.get('format')
    person = Person('Steve', 30)
    if format == 'json':
        return Response(json.dumps({'name': person.name, 'age': person.age}, indent=4),
                        mimetype='application/json')
    return render_template('person.html',
                           person = person)


@app.route('/table')
def table():
    table = {'a': 'A', 'b': 'B'}
    return render_template('table.html', table = table)


@app.route('/target')
def target():
    return render_template('target.html')


@app.route('/redirection')
def redirection():
    return redirect('target')

@app.route('/exception')
def handle_exception():
    try:
        if request.args.get('raise') == 'yes':
            raise ValueError('my error')
    except Exception as e:
        return render_template('err.html', msg='{}'.format(e))
    
    return render_template('err.html', msg='no error')


@app.route('/cookies')
def cookies():
    res = make_response(render_template('cookies.html'))
    if 'my-count' not in request.cookies:
        res.set_cookie('my-count', '1')
    else:
        cnt = int(request.cookies['my-count'])
        cnt += 1
        res.set_cookie('my-count', '{}'.format(cnt))
    return res


@app.route('/g')
def glob():
    return render_template('g.html', greeting=g.greeting)


@app.route('/user')
def user():
    print(session.get('auth'))
    return render_template('user.html')


@app.route('/login', methods=['POST'])
def login():
    user = request.form.get('user')
    passwd = request.form.get('passwd')
    print('username: {} / password: {}'.format(user, passwd))
    if user == 'user' and passwd == 'secret':
        print('authenticated')
        session['auth'] = 'user'
    else:
        print('not authenticated')
        session.pop('auth', None)
    return render_template('user.html')


@app.route('/logout')
def logout():
    session.pop('auth', None)
    return render_template('user.html')


@app.route('/var')
def var():
    x = request.args.get('x')
    return render_template('var.html', x=x)


@app.route('/post')
def _post():
    return render_template('post.html')


@app.route('/mirror', methods=['post', 'get'])
def mirror():
    print('request.data: {}'.format(request.data))
    print('request.get_json(): {}'.format(request.get_json()))
    print('request.form: {}'.format(request.form))
    print('request.args: {}'.format(request.args))
    print('request.files: {}'.format(request.files))

    ret = {'request.data': '{}'.format(request.data),
           'request.get_json()': '{}'.format(request.get_json()),
           'request.form': '{}'.format(request.form),
           'request.args': '{}'.format(request.args),
           'request.files': '{}'.format(request.files)
    }

    js = json.dumps(ret, indent=4)
    return Response(js,mimetype='application/json')
    # return jsonify(ret)


# https://stackoverflow.com/a/9519004/5676460
@app.route('/custom/<path:filename>')
def custom_static(filename):
    # return send_from_directory(app.config['CUSTOM_STATIC_PATH'], filename)
    return send_from_directory('custom', filename)

def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--host', type=str, default='127.0.0.1', help='host name')
    parser.add_argument('--port', type=int, default=8080, help='port number')
    parser.add_argument('--debug', action='store_true', help='debug flag')
    args = parser.parse_args()

    # https://stackoverflow.com/a/13318415
    print('== RULES ==')
    for rule in app.url_map.iter_rules():
        print(rule)
    
    app.run(host=args.host, port=args.port, debug=args.debug)
    

if __name__ == '__main__':
    main()
