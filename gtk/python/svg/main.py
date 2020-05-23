# https://stackoverflow.com/a/45495993

import gi
gi.require_version('Gtk', '3.0')
from gi.repository import Gtk, Gio, GLib, GdkPixbuf

class MyWindow(Gtk.Window):
    def __init__(self):
        Gtk.Window.__init__(self, title = 'Hello World')

        # https://stackoverflow.com/a/41718522
        img = b'''<?xml version="1.0" encoding="UTF-8"?>
<svg width="50" height="50" xmlns="http://www.w3.org/2000/svg">
 <!-- Created with SVG-edit - http://svg-edit.googlecode.com/ -->
 <g>
  <title>Layer 1</title>
   <circle stroke-width="3" stroke="#1a1a1a" fill="#dfdbd2" r="16" cy="25" cx="25"/>
   <path stroke-width="0" fill="#1a1a1a" d="m25,9a16,16 0 0 0 0,32l0,-1.5a18,18 0 0 0 0,-29l0,-1.5z"/>
 </g>
</svg>'''

        stream = Gio.MemoryInputStream.new_from_bytes(GLib.Bytes.new(img))
        pixbuf = GdkPixbuf.Pixbuf.new_from_stream(stream, None)
        self.image = Gtk.Image.new_from_pixbuf(pixbuf)
        self.add(self.image)

    def on_button_clicked(self, widget):
        print('hello world')


def main():
    win = MyWindow()
    win.connect('destroy', Gtk.main_quit)
    win.show_all()
    Gtk.main()

if __name__ == '__main__':
    main()




