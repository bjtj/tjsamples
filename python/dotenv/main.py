import os
from dotenv import load_dotenv

load_dotenv()


def strtobool(str):
    return str in ('True', 'true', 't', '1')


def main():
    assert os.getenv('STR') == 'hello world'
    assert strtobool(os.getenv('BOOL_TRUE')) is True
    assert strtobool(os.getenv('BOOL_FALSE')) is False


if __name__ == '__main__':
    main()
