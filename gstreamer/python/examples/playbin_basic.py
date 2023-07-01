#!/usr/bin/env python

import gi
gi.require_version('Gst', '1.0')
from gi.repository import Gst
Gst.init(None)
# ...
my_playbin = Gst.ElementFactory.make("playbin", None)
assert my_playbin
print(my_playbin)
