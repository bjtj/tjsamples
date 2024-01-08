import os
import traceback

try:
    os.unlink('file1')
except OSError as e:
    pass

try:
    os.removedirs('file1')
except OSError as e:
    pass


os.makedirs('file1', exist_ok=True)
try:
    open('file1', 'w')
except Exception as e:
    traceback.print_exception(e) # >>> Expected Exception: PermissionError: [Errno 13] Permission denied: 'file1'
finally:
    os.removedirs('file1')


# Get multiple handles to the same file

f1 = open('file1', 'w')
f2 = open('file1', 'w')

f1.write('Hello\n')
f2.write('World\n')

f1.close()
f2.close()

with open('file1', 'r') as f:
    print(f.readlines())   # ['World\n']

os.unlink('file1')
