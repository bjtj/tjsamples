#!/usr/bin/env python

# from tkinter import ttk

from tkinter import *
from tkinter.ttk import *




def main():

    root = Tk()
    Frame(root).pack()

    entry = Entry()
    entry.pack()

    contents = StringVar()
    contents.set('This is a variable')
    entry['textvariable'] = contents

    def print_contents(event):
        print(f'Hi, the current entry content is: {contents.get()}')
    entry.bind('<Key-Return>', print_contents)

    style = Style()
    style.configure("BW.TLabel", foreground="black", background="white")
    l1 = Label(text="Test", style="BW.TLabel")
    l1.pack()
    l2 = Label(text="Test", style="BW.TLabel")
    l2.pack()


    Combobox(root, values=['a', 'b', 'c']).pack()

    c = Combobox(root, values=['a', 'b', 'c'], state='readonly')
    c.current(0)
    c.pack()

    mainloop()


if __name__ == '__main__':
    main()
