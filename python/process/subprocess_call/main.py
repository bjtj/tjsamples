import subprocess


def main():
    cmd = ['/bin/ls', '-asl']
    subprocess.call(cmd, shell=False)


if __name__ == '__main__':
    main()
