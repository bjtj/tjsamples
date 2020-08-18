#!/usr/bin/env python

from tkinter import *


def main():
    master = Tk()
    Label(text='one').pack()
    separator = Frame(height=2, bd=1, relief=SUNKEN)
    separator.pack(fill=X, padx=5, pady=5)
    Label(text='two').pack()
    mainloop()


if __name__ == '__main__':
    main()
