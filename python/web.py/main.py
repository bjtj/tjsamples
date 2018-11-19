import web
import argparse
import sys

urls = (
    '/', 'index'
)

class index:
    def GET(self):
        return 'hello, world'


def main(args):
    app = web.application(urls, globals())
    app.run()

if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    parser.add_argument('--foo', default='fxx', type=str, help='foo')
    args = parser.parse_args()
    sys.argv = []               # prevent web.py consume arguments
    
    main(args)
