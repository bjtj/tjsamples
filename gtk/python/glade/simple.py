import gi
gi.require_version("Gtk", "3.0")
from gi.repository import Gtk


builder = Gtk.Builder()
builder.add_from_file("simple.glade")

# builder.add_objects_from_file("example.glade", ("button1", "button2"))

window = builder.get_object("window1")
window.show_all()
window.connect("destroy", Gtk.main_quit)
Gtk.main()

