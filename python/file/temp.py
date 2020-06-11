#!/usr/bin/env python3

import tempfile


fp = tempfile.TemporaryFile()
fp.write(b'Hello World!')
fp.seek(0)
print(fp.read())
fp.close()

with tempfile.TemporaryFile() as fp:
    fp.write(b'Hello World!')
    fp.seek(0)
    print(fp.read())

with tempfile.TemporaryDirectory() as tmpdirname:
    print(f'created temporary directory: {tmpdirname}')
