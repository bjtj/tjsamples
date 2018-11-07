import os, argparse


def main():
    print('\n'.join(os.environ.keys()))

    parser = argparse.ArgumentParser()
    parser.add_argument('--my-msg1', default=os.environ.get('MY_MSG1', 'none'))
    parser.add_argument('--my-msg2', default=os.environ.get('MY_MSG2', 'none'))

    args = parser.parse_args()
    print(args)

if __name__ == '__main__':
    main()
