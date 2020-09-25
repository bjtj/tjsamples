#! /usr/bin/python
import gi
gi.require_version('Gtk', '3.0')
gi.require_version('Pango', '1.0')
from gi.repository import Gtk
from gi.repository import Pango
from gi.repository import GLib
import signal

HIERARCHICAL_DATA = {
    "Queen": {
        "A Kind of Magic": [ "Who Wants to Live Forever", "A Kind of Magic" ],
        "The Miracle": [ "Breakthru", "Scandal" ]
    },
    "Five Finger Death Punch": {
        "The Way of the Fist": [ "The Way of the Fist", "The Bleeding" ],
    },
    "Hank Marvin": {
        "Heartbeat": [ "Oxygene (Part IV)", "Take Five" ]
    }
}

ICONS = [ "stock_people", "media-optical", "sound" ]

class TreeViewFilteringDemo(Gtk.Window):
    EXPAND_BY_DEFAULT = True
    SPACING = 10

    # Controls whether the row should be visible
    COL_VISIBLE = 0
    # Text to be displayed
    COL_TEXT = 1
    # Desired weight of the text (bold for matching rows)
    COL_WEIGHT = 2
    # Icon to be displayed
    COL_ICON = 3

    def __init__(self):
        # Set up window
        Gtk.Window.__init__(self, title="TreeView filtering demo")
        self.set_size_request(500, 500)
        self.set_position(Gtk.WindowPosition.CENTER)
        self.set_resizable(True)
        self.set_border_width(self.SPACING)

        # Set up and populate a tree store
        self.tree_store = Gtk.TreeStore(bool, str, Pango.Weight, str)
        self.add_nodes(HIERARCHICAL_DATA, None, 0)

        # Create some boxes for laying out the different controls
        vbox = Gtk.Box(orientation=Gtk.Orientation.VERTICAL, spacing=self.SPACING)
        vbox.set_homogeneous(False)
        hbox = Gtk.Box(Gtk.Orientation.HORIZONTAL, spacing=self.SPACING)
        hbox.set_homogeneous(False)
        vbox.pack_start(hbox, False, True, 0)
        self.add(vbox)

        # A text entry for filtering
        self.search_entry = Gtk.Entry()
        self.search_entry.set_placeholder_text("Enter text here to filter results")
        self.search_entry.connect("changed", self.refresh_results)
        hbox.pack_start(self.search_entry, True, True, 0)

        # Add a checkbox for controlling subtree display
        self.subtree_checkbox = Gtk.CheckButton("Show subtrees of matches")
        self.subtree_checkbox.connect("toggled", self.refresh_results)
        hbox.pack_start(self.subtree_checkbox, False, False, 0)

        # Use an internal column for filtering
        self.filter = self.tree_store.filter_new()
        self.filter.set_visible_column(self.COL_VISIBLE)
        self.treeview = Gtk.TreeView(model=self.filter)

        # CellRenderers for icons and texts
        icon_renderer = Gtk.CellRendererPixbuf()
        text_renderer = Gtk.CellRendererText()

        # Put the icon and the text into a single column (otherwise only the
        # first column would be indented according to its depth in the tree)
        col_combined = Gtk.TreeViewColumn("Icon and Text")
        col_combined.pack_start(icon_renderer, False)
        col_combined.pack_start(text_renderer, False)
        col_combined.add_attribute(text_renderer, "text", self.COL_TEXT)
        col_combined.add_attribute(text_renderer, "weight", self.COL_WEIGHT)
        col_combined.add_attribute(icon_renderer, "icon_name", self.COL_ICON)
        self.treeview.append_column(col_combined)

        # Scrolled Window in case results don't fit in the available space
        self.sw = Gtk.ScrolledWindow()
        self.sw.add(self.treeview)

        vbox.pack_start(self.sw, True, True, 0)

        # Initialize filtering
        self.refresh_results()

    def add_nodes(self, data, parent, level):
        "Create the tree nodes from a hierarchical data structure"
        if isinstance(data, dict):
            for key, value in data.items():
                child = self.tree_store.append(parent, [True, key, Pango.Weight.NORMAL, ICONS[level]])
                self.add_nodes(value, child, level + 1)
        else:
            for text in data:
                self.tree_store.append(parent, [True, text, Pango.Weight.NORMAL, ICONS[level]])

    def refresh_results(self, _widget = None):
        "Apply filtering to results"
        search_query = self.search_entry.get_text().lower()
        show_subtrees_of_matches = self.subtree_checkbox.get_active()
        if search_query == "":
            self.tree_store.foreach(self.reset_row, True)
            if self.EXPAND_BY_DEFAULT:
                self.treeview.expand_all()
            else:
                self.treeview.collapse_all()
        else:
            self.tree_store.foreach(self.reset_row, False)
            self.tree_store.foreach(self.show_matches, search_query, show_subtrees_of_matches)
            self.treeview.expand_all()
        self.filter.refilter()

    def reset_row(self, model, path, iter, make_visible):
        "Reset some row attributes independent of row hierarchy"
        self.tree_store.set_value(iter, self.COL_WEIGHT, Pango.Weight.NORMAL)
        self.tree_store.set_value(iter, self.COL_VISIBLE, make_visible)

    def make_path_visible(self, model, iter):
        "Make a row and its ancestors visible"
        while iter:
            self.tree_store.set_value(iter, self.COL_VISIBLE, True)
            iter = model.iter_parent(iter)

    def make_subtree_visible(self, model, iter):
        "Make descendants of a row visible"
        for i in range(model.iter_n_children(iter)):
            subtree = model.iter_nth_child(iter, i)
            if model.get_value(subtree, self.COL_VISIBLE):
                # Subtree already visible
                continue
            self.tree_store.set_value(subtree, self.COL_VISIBLE, True)
            self.make_subtree_visible(model, subtree)

    def show_matches(self, model, path, iter, search_query, show_subtrees_of_matches):
        text = model.get_value(iter, self.COL_TEXT).lower()
        if search_query in text:
            # Highlight direct match with bold
            self.tree_store.set_value(iter, self.COL_WEIGHT, Pango.Weight.BOLD)
            # Propagate visibility change up
            self.make_path_visible(model, iter)
            if show_subtrees_of_matches:
                # Propagate visibility change down
                self.make_subtree_visible(model, iter)
            return

win = TreeViewFilteringDemo()
win.connect("delete-event", Gtk.main_quit)
win.show_all()
# Make sure that the application can be stopped from the terminal using Ctrl-C
GLib.unix_signal_add(GLib.PRIORITY_DEFAULT, signal.SIGINT, Gtk.main_quit)
Gtk.main()
