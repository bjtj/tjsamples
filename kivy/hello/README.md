# Getting Started » Installing Kivy #

<https://kivy.org/doc/stable/gettingstarted/installation.html>


```cmd
python -m pip install --upgrade pip setuptools virtualenv
```

```cmd
python -m pip install "kivy[base]" kivy_examples
```

## Programming Guide » Kivy Basics

<https://kivy.org/doc/stable/guide/basic.html#quickstart>


```python
import kivy
kivy.require('2.1.0') # replace with your current kivy version !

from kivy.app import App
from kivy.uix.label import Label


class MyApp(App):

    def build(self):
        return Label(text='Hello world')


if __name__ == '__main__':
    MyApp().run()
```