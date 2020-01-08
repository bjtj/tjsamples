import os
from flask import Blueprint, request, Response, render_template, send_file, redirect

file = Blueprint('file', __name__, url_prefix='/file', template_folder='templates')

BASE_PATH='downloads'
if not os.path.exists(BASE_PATH):
    os.makedirs(BASE_PATH)


@file.route('/')
def index():
    return render_template('file/index.html')


@file.route('/upload', methods=['post'])
def upload():
    save = request.form.get('save')
    for k, v in request.files.items():
        print('Type: {}'.format(type(v)))
        print('Name: {}'.format(v.name))
        print('File name: {}'.format(v.filename))
        print('Content type: {}'.format(v.headers['Content-Type']))
        print('Content type: {}'.format(v.content_type))
        print('Content length: {}'.format(v.content_length)) # 0
        if save:
            print('== Write to file ==')
            # open(os.path.join(BASE_PATH, v.filename), 'wb').write(v.read())
            filepath = os.path.join(BASE_PATH, v.filename)
            v.save(filepath)    # https://stackoverflow.com/a/15782516/5676460
            print('File size: {}'.format(os.stat(filepath).st_size))
        else:
            print('File size: {}'.format(len(v.read())))
            
    res = '\n'.join([x.filename for x in request.files.values()])
    if save:
        return redirect('list')
    else:
        return Response(res, mimetype='text/plain')


class FileItem:
    def __init__(self, basepath, filename):
        self.basepath = basepath
        self.filename = filename
        self.path = os.path.join(self.basepath, self.filename)


@file.route('/list')
def list():
    items = [FileItem(BASE_PATH, x) for x in os.listdir(BASE_PATH)]
    return render_template('file/list.html', files = items)


@file.route('/download/<filename>')
def download(filename):
    filepath = os.path.join(BASE_PATH, filename)
    return send_file(filepath)
    
