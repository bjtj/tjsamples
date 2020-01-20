from flask import Blueprint, render_template

mybp = Blueprint('mybp', __name__, url_prefix='/mybp', template_folder='templates', static_folder='static')

@mybp.route('/')
def index():
    return render_template('mybp/index.html')
