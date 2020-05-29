# Localization of PyGObject GUI using Gettext #

<https://stackoverflow.com/a/31058361>

<https://stackoverflow.com/a/10540744>

test.py

```python
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
```

test.glade

```xml
<?xml version="1.0" encoding="UTF-8"?>
<interface>
  <!-- interface-requires gtk+ 3.0 -->
  <object class="GtkWindow" id="window">
    <property name="can_focus">False</property>
    <property name="window_position">center-always</property>
    <property name="default_width">400</property>
    <signal name="destroy" handler="main_quit" swapped="no"/>
    <child>
      <object class="GtkBox" id="box1">
        <property name="visible">True</property>
        <property name="can_focus">False</property>
        <property name="orientation">vertical</property>
        <child>
          <object class="GtkLabel" id="label1">
            <property name="visible">True</property>
            <property name="can_focus">False</property>
            <property name="label" translatable="yes">File</property>
          </object>
          <packing>
            <property name="expand">False</property>
            <property name="fill">True</property>
            <property name="position">0</property>
          </packing>
        </child>
        <child>
          <object class="GtkLabel" id="label2">
            <property name="visible">True</property>
            <property name="can_focus">False</property>
            <property name="label" translatable="yes">Edit</property>
          </object>
          <packing>
            <property name="expand">False</property>
            <property name="fill">True</property>
            <property name="position">1</property>
          </packing>
        </child>
        <child>
          <object class="GtkLabel" id="label3">
            <property name="visible">True</property>
            <property name="can_focus">False</property>
            <property name="label" translatable="yes">Find</property>
          </object>
          <packing>
            <property name="expand">False</property>
            <property name="fill">True</property>
            <property name="position">2</property>
          </packing>
        </child>
        <child>
          <object class="GtkLabel" id="label4">
            <property name="visible">True</property>
            <property name="can_focus">False</property>
            <property name="label" translatable="yes">View</property>
          </object>
          <packing>
            <property name="expand">False</property>
            <property name="fill">True</property>
            <property name="position">3</property>
          </packing>
        </child>
        <child>
          <object class="GtkLabel" id="label5">
            <property name="visible">True</property>
            <property name="can_focus">False</property>
            <property name="label" translatable="yes">Document</property>
          </object>
          <packing>
            <property name="expand">False</property>
            <property name="fill">True</property>
            <property name="position">4</property>
          </packing>
        </child>
      </object>
    </child>
  </object>
</interface>
```

```shell
xgettext --keyword=translatable --sort-output -o en.po test.glade
```

<https://stackoverflow.com/a/8377533>

```python
if sys.platform.startswith('win'):
    import locale
    if os.getenv('LANG') is None:
        lang, enc = locale.getdefaultlocale()
        os.environ['LANG'] = lang
```
