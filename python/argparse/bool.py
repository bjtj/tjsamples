import argparse


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--flag', default=False, type=lambda x: x == 'True')
    assert parser.parse_args().flag == False
    assert parser.parse_args(['--flag', 'True']).flag == True

    parser = argparse.ArgumentParser()
    parser.add_argument('--flag', default=False, action='store_true')
    assert parser.parse_args().flag == False
    assert parser.parse_args(['--flag']).flag == True
    

if __name__ == '__main__':
    main()
