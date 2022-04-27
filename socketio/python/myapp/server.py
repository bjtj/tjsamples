from flask import Flask, render_template, request
from flask_socketio import SocketIO, send, emit


app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret!'
# socketio = SocketIO(app, logger=True, engineio_logger=True)
socketio = SocketIO(app)


@socketio.on('message')
def handle_message(data):
    print('received message: ' + data)
    send(data)
    # send(data, namespace='/chat')


@socketio.on('json')
def handle_json(json):
    print('received json: ' + str(json))
    send(json, json=True)


@socketio.on('my event')
def handle_my_custom_event(item):
    print('my event: ' + str(item))
    emit('my response', item)


@socketio.event
def my_custom_event(arg1, arg2, arg3):
    print('received args: ' + arg1 + arg2 + arg3)

@socketio.on('connect')
def test_connect(auth):
    emit('my response', { 'data': 'Connected' })


@socketio.on('disconnect')
def test_disconnect():
    print('Client disconnected')


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/broadcast')
def broadcast():
    msg = request.args.get('msg')
    print(request.args)
    if msg is None:
        msg = 'hello!!!'

    socketio.emit('my response', '[BROADCAST] ' + msg, broadcast=True)
    return 'broadcast!'


def main():
    socketio.run(app, host='0.0.0.0', debug=True)


if __name__ == '__main__':
    main()
