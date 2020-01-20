from flask import Flask, render_template
from mybp.main import mybp

app = Flask(__name__)
app.register_blueprint(mybp)

@app.route('/')
def index():
    return render_template('index.html')


def main():
    app.run(port=8080)

if __name__ == '__main__':
    main()
