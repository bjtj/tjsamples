from flask import Flask, request, Response, jsonify

app = Flask(__name__)

@app.route('/form', methods=['get', 'post'])
def handle_request():
    if request.method == 'GET':
        return Response('''<html>
        <body>
        <form method="POST" enctype="multipart/form-data">
        <p><input type="text" name="username" placeholder="username" /></p>
        <p><input type="file" name="myfile" /></p>
        <input type="submit" value="submit" />
        <input type="reset" value="reset" />
        </form>
        </body>
        </html>''', content_type="text/html")
    else:
        username = request.form['username']
        file = request.files['myfile']
        content = file.read()
        return jsonify(username=username,
                       filename=file.filename,
                       content_length=file.content_length, # 0
                       content_type=file.content_type,
                       filesize=len(content),
                       mimetype=file.mimetype)

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
