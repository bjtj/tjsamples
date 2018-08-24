from flask import Blueprint, render_template, abort
from jinja2 import TemplateNotFound


mypage = Blueprint('mypage', __name__,
                   template_folder='templates')

@mypage.route('/', defaults={'page':'index'})
@mypage.route('/<page>')
def show(page):
    try:
        return render_template('pages/{}.html'.format(page))
    except TemplateNotFound:
        abort(404)    

    
