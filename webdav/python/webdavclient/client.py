import webdav.client as wc
import sys


def main():
    
    hostname, username, password = sys.argv[1:]

    options = {
        'webdav_hostname' : hostname,
        'webdav_login' : username,
        'webdav_password' : password,
    }

    client = wc.Client(options)

    # ignore ssl certification
    client.default_options['SSL_VERIFYPEER'] = 0
    client.default_options['SSL_VERIFYHOST'] = 0

    lst = client.list()
    print('-- LIST (count: {}) --'.format(len(lst)))
    for item in lst:
        print(' * {}'.format(item))

if __name__ == '__main__':
    main()
