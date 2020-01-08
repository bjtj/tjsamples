from flask import Flask, render_template


app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')


@app.route('/list')
def list():
    lst = ['a', 'b', 'c']
    return render_template('list.html', list=lst)


@app.route('/content1')
def content1():
    return render_template('content1.html')


if __name__ == '__main__':
    app.run(port=8080)

