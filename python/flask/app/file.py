from flask import Blueprint, request, Response, render_template

file = Blueprint('file', __name__, url_prefix='/file', template_folder='templates')

@file.route('/')
def index():
    return render_template('file/index.html')


@file.route('/upload', methods=['post'])
def upload():
    save = request.form.get('save')
    for k, v in request.files.items():
        print('name: {}'.format(v.name))
        print('content type: {}'.format(v.headers['Content-Type']))
        if save:
            print('write to file')
            open(v.name, 'wb').write(v.read())
    return Response('\n'.join(request.files.keys()),
                    mimetype='text/plain')
