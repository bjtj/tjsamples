import subprocess
import os


def prompt(msg):
    try:
        return raw_input(msg)
    except Exception:
        return input(msg)


def run(cmd):
    proc = subprocess.Popen(cmd, stdout=subprocess.PIPE, stderr=subprocess.PIPE,
                            shell=True, preexec_fn=os.setsid)

    print('Command: {}'.format(cmd))
    print('PID: {}'.format(proc.pid))

    while True:
        c = prompt('> ')
        if c == 'poll':
            # check if process is running
            ret = proc.poll()
            print('Poll: {} ({})'.format(ret, 'Stopped' if ret is not None else 'Running'))
        if c == 'quit':
            break

    if proc.poll() is None:
        # kill process if it is still running
        pgid = os.getpgid(proc.pid)
        os.system('sudo kill -TERM -- -{}'.format(pgid))

    print('Done')


def main():
    cmd = 'python hello.py'
    run(cmd)

    cmd = 'python loop.py'
    run(cmd)


if __name__ == '__main__':
    main()
