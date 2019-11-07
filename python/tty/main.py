import sys


def getpass(prompt='Password: '):
    import termios, sys
    fd = sys.stdin.fileno()
    old = termios.tcgetattr(fd)
    new = termios.tcgetattr(fd)
    new[3] = new[3] & ~termios.ECHO
    try:
        termios.tcsetattr(fd, termios.TCSADRAIN, new)
        if sys.version_info[0] == 2:
            passwd = raw_input(prompt)
        else:
            passwd = input(prompt)
    finally:
        termios.tcsetattr(fd, termios.TCSADRAIN, old)

    return passwd
        

def main():
    pw = getpass()
    print('your password is -- {}'.format(pw))

if __name__ == '__main__':
    main()
