#!/usr/bin/env python
import gi

gi.require_version("Gtk", "3.0")
from gi.repository import Gtk


class MyWindow(Gtk.Window):
    def __init__(self):
        Gtk.Window.__init__(self, title="Hello World")
        self.box = Gtk.Box(spacing=6)
        self.add(self.box)
        self.calendar = Gtk.Calendar()
        self.box.pack_start(self.calendar, True, True, 0)


win = MyWindow()
win.connect("destroy", Gtk.main_quit)
win.show_all()
Gtk.main()
