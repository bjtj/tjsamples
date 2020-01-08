from flask import Flask, request, Response

try:
    from StringIO import StringIO as sio
except:
    from io import StringIO as sio

app = Flask(__name__)

@app.route('/get')
def get():
    output = sio()
    output.write('GET\n')
    output.write('args: {}\n'.format(request.args))
    content = output.getvalue()
    output.close()
    return Response(content, mimetype='text/plain')

@app.route('/post', methods=['post'])
def post():
    output = sio()
    output.write('POST\n')
    output.write('form: {}\n'.format(request.form))
    output.write('data: {}\n'.format(request.data))
    output.write('files: {}\n'.format(request.files))
    content = output.getvalue()
    output.close()
    return Response(content, mimetype='text/plain')




def main():
    app.run(host='0', port=8080)
    

if __name__ == '__main__':
    main()
