import mmap

with mmap.mmap(-1, 13) as mm:
    mm.write(b"Hello world!")
