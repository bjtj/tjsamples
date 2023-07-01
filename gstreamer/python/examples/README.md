# Python GStreamer Tutorial #

<https://brettviren.github.io/pygst-tutorial-org/pygst-tutorial.html>


# TypeError: Argument 1 does not allow None as a value #

<https://e2e.ti.com/support/processors/f/791/p/451660/1625155#1625155>

```
...
  File "./pipeline_example.py", line 32, in __init__
    self.player.add(decoder)
TypeError: Argument 1 does not allow None as a value
```

```
...
Install gst-plugins-ugly which has mad/lame
Install gst-plugins-bad which has mpg123
```

e.g.)

<https://gstreamer.freedesktop.org/documentation/installing/on-linux.html?gi-language=c>

```
sudo apt install gstreamer1.0-plugins-ugly
```

## How to fix `WARNING: erroneous pipeline: no element “mad”` ##

<https://stackoverflow.com/a/56138982/5676460>

From the GStreamer's 1.12 Changelog on plugins removal:

> The mad mp1/mp2/mp3 decoder plugin was removed from gst-plugins-ugly, as libmad is GPL licensed, has been unmaintained for a very long time, and there are better alternatives available. Use the mpg123audiodec element from the mpg123 plugin in gst-plugins-ugly instead, or avdec_mp3 from the gst-libav module which wraps the ffmpeg library. We expect that we will be able to move mp3 decoding to gst-plugins-good in the next cycle seeing that most patents around mp3 have expired recently or are about to expire.

## mpg123audiodec ##

<https://gstreamer.freedesktop.org/documentation/mpg123/index.html?gi-language=c>



# Printing debug information #

<https://gstreamer.freedesktop.org/documentation/tutorials/basic/debugging-tools.html?gi-language=c#printing-debug-information>

```
GST_DEBUG=2
```

