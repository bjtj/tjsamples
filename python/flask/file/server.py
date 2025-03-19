from flask import Flask, request, jsonify
import tempfile
import subprocess

app = Flask(__name__)

def write_temp(content):
    tf = tempfile.TemporaryFile()
    filename = tf.name
    tf.write(content)
    tf.flush()
    subprocess.run(['stat', filename])
    tf.close()


@app.route('/api/upload', methods=['post'])
def handle_request():
    # if request.files:    <--  it consumes stream, unavailable for further read
    if request.content_type.startswith('multipart/form-data'):
        file = request.files['myfile']
        content = file.read()
        write_temp(content)
        return jsonify(type='form',
                       filename=file.filename,
                       content_length=file.content_length, # 0
                       content_type=file.content_type,
                       size=len(content),
                       mimetype=file.mimetype)
    else:
        content = request.stream.read()
        write_temp(content)
        return jsonify(type='stream', size=len(content))


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
