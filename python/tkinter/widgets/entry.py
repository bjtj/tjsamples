#!/usr/bin/env python

from tkinter import *

def main():
    ex1()
    ex2()


def ex1():
    master = Tk()
    e = Entry(master)
    e.pack()

    e.focus_set()
    def callback():
        print(e.get())

    b = Button(master, text='get', width=10, command=callback)
    b.pack()

    mainloop()


def ex2():

    master = Tk()

    # e = Entry(master, width=50)
    # e.pack()
    # text = e.get()
    # print(text)

    def makeentry(parent, caption, width=None, **options):
        Label(parent, text=caption).pack(side=LEFT)
        entry = Entry(parent, **options)
        if width:
            entry.config(width=width)
        entry.pack(side=LEFT)
        return entry
    user = makeentry(master, 'User name:', 10)
    password = makeentry(master, 'Password:', 10, show='*')

    # content = StringVar()
    # entry = Entry(master, text=caption, textvariable=content)
    # text = content.get()
    # content.set(text)

    mainloop()
    

if __name__ == '__main__':
    main()
