import mmap
import os

mm = mmap.mmap(-1, 13)
mm.write('Hello World!')

pid = os.fork()

if pid == 0:
    mm.seek(0)
    print(mm.readline())
    mm.close()
