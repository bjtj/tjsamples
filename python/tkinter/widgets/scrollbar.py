#!/usr/bin/env python
# from Tkinter import *
from tkinter import *


def main():
    master = Tk()
    scrollbar = Scrollbar(master)
    scrollbar.pack(side=RIGHT, fill=Y)
    listbox = Listbox(master, yscrollcommand=scrollbar.set)
    for i in range(1000):
        listbox.insert(END, str(i))
    listbox.pack(side=LEFT, fill=BOTH)
    scrollbar.config(command=listbox.yview)
    mainloop()

if __name__ == '__main__':
    main()
