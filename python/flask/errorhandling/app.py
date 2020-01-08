from flask import Flask, abort, render_template

app = Flask(__name__)

@app.errorhandler(404)
def error404(err):
    return render_template('404.html', err = err)


@app.route('/err')
def err():
    abort(500)


def main():
    app.run(port=8080)

if __name__ == '__main__':
    main()
