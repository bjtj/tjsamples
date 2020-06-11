import time

from gi.repository import Gio, GLib, Gtk


class DownloadWindow(Gtk.Window):

    def __init__(self):
        super(DownloadWindow, self).__init__(
            default_width=500, default_height=400, title="Async I/O Example")

        self.cancellable = Gio.Cancellable()

        self.cancel_button = Gtk.Button(label="Cancel")
        self.cancel_button.connect("clicked", self.on_cancel_clicked)
        self.cancel_button.set_sensitive(False)

        self.start_button = Gtk.Button(label="Load")
        self.start_button.connect("clicked", self.on_start_clicked)

        textview = Gtk.TextView()
        self.textbuffer = textview.get_buffer()
        scrolled = Gtk.ScrolledWindow()
        scrolled.add(textview)

        box = Gtk.Box(orientation=Gtk.Orientation.VERTICAL, spacing=6,
                      border_width=12)
        box.pack_start(self.start_button, False, True, 0)
        box.pack_start(self.cancel_button, False, True, 0)
        box.pack_start(scrolled, True, True, 0)

        self.add(box)

    def append_text(self, text):
        iter_ = self.textbuffer.get_end_iter()
        self.textbuffer.insert(iter_, "[%s] %s\n" % (str(time.time()), text))

    def on_start_clicked(self, button):
        button.set_sensitive(False)
        self.cancel_button.set_sensitive(True)
        self.append_text("Start clicked...")

        file_ = Gio.File.new_for_uri(
            "http://python-gtk-3-tutorial.readthedocs.org/")
        file_.load_contents_async(
            self.cancellable, self.on_ready_callback, None)

    def on_cancel_clicked(self, button):
        self.append_text("Cancel clicked...")
        self.cancellable.cancel()

    def on_ready_callback(self, source_object, result, user_data):
        try:
            succes, content, etag = source_object.load_contents_finish(result)
        except GLib.GError as e:
            self.append_text("Error: " + e.message)
        else:
            content_text = content[:100].decode("utf-8")
            self.append_text("Got content: " + content_text + "...")
        finally:
            self.cancellable.reset()
            self.cancel_button.set_sensitive(False)
            self.start_button.set_sensitive(True)


if __name__ == "__main__":
    win = DownloadWindow()
    win.show_all()
    win.connect("destroy", Gtk.main_quit)

    Gtk.main()
