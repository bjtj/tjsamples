import requests


def main():
    res = requests.post('http://bugs.python.org',
                        data={'number' : '12524',
                              'type' : 'issue',
                              'action' : 'show'})

    print('{} {}'.format(res.status_code, res.reason))
    print('{}'.format(res.text.encode('utf-8')))


if __name__ == '__main__':
    main()
