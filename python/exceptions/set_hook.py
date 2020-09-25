import sys
import threading
import traceback


def foo(exctype, value, tb):
    print('------- My Error Information --------')
    print('Type:', exctype)
    print('Value:', value)
    print('Traceback:\n', '\n'.join(traceback.format_tb(tb)))


def set_hook():
    patch_threading_excepthook()
    sys.excepthook = foo


def patch_threading_excepthook():
    """Installs our exception handler into the threading modules Thread object
    Inspired by https://bugs.python.org/issue1230540
    """
    old_init = threading.Thread.__init__

    def new_init(self, *args, **kwargs):
        old_init(self, *args, **kwargs)
        old_run = self.run

        def run_with_our_excepthook(*args, **kwargs):
            try:
                old_run(*args, **kwargs)
            except (KeyboardInterrupt, SystemExit):
                raise
            except:
                sys.excepthook(*sys.exc_info())
        self.run = run_with_our_excepthook
    threading.Thread.__init__ = new_init
