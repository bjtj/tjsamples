#!/usr/bin/env python
# https://stackoverflow.com/a/48929832

import shutil

def main():
    total, used, free = shutil.disk_usage("/")
    print("Total: %d GiB" % (total // (2**30)))
    print("Used: %d GiB" % (used // (2**30)))
    print("Free: %d GiB" % (free // (2**30)))
    

if __name__ == '__main__':
    main()
