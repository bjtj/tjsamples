from flask import Flask

app = Flask(__name__)


@app.route('/upload', methods=['POST'])
def upload():
    return 'upload'

@app.route('/delete', methods=['DELETE'])
def delete():
    return 'delete'


if __name__ == '__main__':
    app.run(port=8080)
