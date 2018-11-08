from flask import Flask, render_template
from flask_socketio import SocketIO, send, emit
from threading import Event, Thread
import time
import json



app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret!'
socketio = SocketIO(app)


@app.route('/')
def index():
    return render_template('index.html')


@socketio.on('message')
def handle_message(msg):
    print('msg: {}'.format(msg))


@socketio.on('my event')
def handle_my_custom_event(json):
    print('custom event msg: {}'.format(json))


class TimerThread(Thread):
    def __init__(self, interval, func):
        Thread.__init__(self)
        self.event = Event()
        self.interval = interval
        self.func = func
        self.finishing = False

    def run(self):
        while self.finishing == False:
            time.sleep(self.interval)
            self.func()

    def finish(self):
        self.finishing = True

def send_hello():
    print('[{}] send hello'.format(time.time()))
    socketio.emit('my response', 'hello')


def send_json():
    print('[{}] send hello'.format(time.time()))
    obj = json.loads('{"data": "hello"}')
    socketio.emit('my json', obj)


def main():
    t = TimerThread(1, send_hello)
    t.daemon = True
    t.start()

    t2 = TimerThread(1, send_json)
    t2.daemon = True
    t2.start()
    
    socketio.run(app, port=50000)


if __name__ == '__main__':
    main()
