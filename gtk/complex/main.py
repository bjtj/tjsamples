import gi
gi.require_version('Gtk', '3.0')
from gi.repository import Gtk


def main():
    builder = Gtk.Builder()
    builder.add_from_file('main.glade')
    window = builder.get_object('window1')
    window.show_all()
    window.connect('destroy', Gtk.main_quit)
    Gtk.main()
    

if __name__ == '__main__':
    main()
