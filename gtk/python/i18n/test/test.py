from gi.repository import Gtk
from os.path import abspath, dirname, join, realpath
import gettext
import locale

APP = 'myapp'
WHERE_AM_I = abspath(dirname(realpath(__file__)))
LOCALE_DIR = join(WHERE_AM_I, 'mo')

locale.setlocale(locale.LC_ALL, '')
locale.bindtextdomain(APP, LOCALE_DIR)
gettext.bindtextdomain(APP, LOCALE_DIR)
gettext.textdomain(APP)
_ = gettext.gettext

print('Using locale directory: {}'.format(LOCALE_DIR))

class MyApp(object):

    def __init__(self):
        # Build GUI
        self.builder = Gtk.Builder()
        self.glade_file = join(WHERE_AM_I, 'test.glade')
        self.builder.set_translation_domain(APP)
        self.builder.add_from_file(self.glade_file)

        print(_('File'))
        print(_('Edit'))
        print(_('Find'))
        print(_('View'))
        print(_('Document'))

        # Get objects
        go = self.builder.get_object
        self.window = go('window')

        # Connect signals
        self.builder.connect_signals(self)

        # Everything is ready
        self.window.show()

    def main_quit(self, widget):
        Gtk.main_quit()

if __name__ == '__main__':
    gui = MyApp()
    Gtk.main()
