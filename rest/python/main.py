import requests


def main():
    resp = requests.get('https://jsonplaceholder.typicode.com/todos/1')
    print(resp)
    print(resp.status_code)
    print(resp.json())
    print(resp.text)

if __name__ == '__main__':
    main()
