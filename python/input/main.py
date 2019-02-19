from getpass import getpass

def prompt(msg):
    try:
        return raw_input(msg)
    except Exception:
        return input(msg)


def main():
    username = prompt('username: ')
    password = getpass('password: ')
    print('Username is "{}" and Password is "{}"'.format(username, password))


if __name__ == '__main__':
    main()
