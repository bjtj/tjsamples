# An Introduction To Tkinter #

<https://effbot.org/tkinterbook/tkinter-index.htm#class-reference>





## The Tkinter Frame Widget ##

<https://effbot.org/tkinterbook/frame.htm>

> The frame widget can be used as a place holder for video overlays and other external processes.
>
> To use a frame widget in this fashion, set the background color to an empty string (this prevents updates, and leaves the color map alone), pack it as usual, and use the window_id method to get the window handle corresponding to the frame.
>
> ```
> frame = Frame(width=768, height=576, bg="", colormap="new")
> frame.pack()
>
> video.attach_window(frame.window_id())
> ```


# Ttk Widgets #

<https://docs.python.org/3/library/tkinter.ttk.html#ttk-widgets>

