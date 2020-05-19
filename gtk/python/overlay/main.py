import gi
gi.require_version('Gtk', '3.0')
from gi.repository import Gtk

class MyWindow(Gtk.Window):
    def __init__(self):
        Gtk.Window.__init__(self, title = 'Overlay example')

        self.vbox = Gtk.Box(orientation=Gtk.Orientation.VERTICAL, spacing=10)
        
        self.overlay = Gtk.Overlay()

        self.label1 = Gtk.Label("Hello World!", xalign=0)
        self.overlay.add(self.label1)
        
        self.overlay.add_overlay(self.vbox)
        self.vbox.set_halign(Gtk.Align.CENTER)
        self.vbox.set_valign(Gtk.Align.CENTER)
        
        self.button = Gtk.Button(label = 'click here')
        self.button.connect('clicked', self.on_button_clicked)
        self.vbox.pack_start(self.button, False, False, 0)
        
        self.add(self.overlay)

        self.set_size_request(300, 300)

    def on_button_clicked(self, widget):
        print('hello world')


def main():
    # win = Gtk.Window()
    win = MyWindow()
    win.connect('destroy', Gtk.main_quit)
    win.show_all()
    Gtk.main()

if __name__ == '__main__':
    main()
