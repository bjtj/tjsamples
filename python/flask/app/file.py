from flask import Blueprint, request, Response, render_template

file = Blueprint('file', __name__, url_prefix='/file', template_folder='templates')

@file.route('/')
def index():
    return render_template('file/index.html')


@file.route('/upload', methods=['post'])
def upload():
    save = request.form.get('save')
    for k, v in request.files.items():
        print('Name: {}'.format(v.name))
        print('Content type: {}'.format(v.headers['Content-Type']))
        print('Content type: {}'.format(v.content_type))
        if save:
            print('== Write to file ==')
            open(v.name, 'wb').write(v.read())
    return Response('\n'.join(request.files.keys()),
                    mimetype='text/plain')
