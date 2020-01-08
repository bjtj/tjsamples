from flask import Flask, redirect

app = Flask(__name__)

@app.route('/')
def index():
    return redirect('/target')


@app.route('/target')
def target():
    return 'Target'


def main():
    app.run(port=8080)

if __name__ == '__main__':
    main()
