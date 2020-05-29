import gi
gi.require_version('Gtk', '3.0')
from gi.repository import Gtk

def onMenuClicked(self):
    revealer.set_reveal_child(not revealer.get_reveal_child()) 

builder = Gtk.Builder()
builder.add_from_file("idea.ui")

window = builder.get_object("window1")
revealer = builder.get_object("revealer1")
menuButton = builder.get_object("button1")
menuButton.connect ("clicked", onMenuClicked)

window.connect ("destroy", Gtk.main_quit)
window.show_all()

Gtk.main()
