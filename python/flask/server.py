import os
from flask import Flask, render_template, request

app = Flask(__name__)

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


def main():
    app.run(host='0', port=8080)
    

if __name__ == '__main__':
    main()
