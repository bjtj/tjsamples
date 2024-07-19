from contact import Contact
import threading
from time import sleep

def worker(archiver):
    while True:
        sleep(1)
        archiver._progress += 0.1
        if archiver._progress >= 1:
            archiver._archive_file_path = 'archive-{}.json'.format(archiver._id)
            with open(archiver._archive_file_path, 'w') as f:
                f.write('[{"id": 1, "first": "John", "last": "Doe", "phone": "555-1212", "email": "john@xample.com"}]')
            archiver._status = 'Complete'
            break

class Archiver:

    _inst = None

    def __init__(self, id):
        self._id = id
        self.contacts = Contact.all(1)
        self.archive = []
        self._status = 'Waiting' # Waiting, Running, Complete
        self._progress = 0
        self._thread = None
        self._archive_file_path = None

    def run(self):
        self._status = 'Running'
        self._progress = 0
        self._thread = threading.Thread(target=worker, args=(self,))
        self._thread.start()

    @staticmethod
    def get():
        if Archiver._inst is None:
            Archiver._inst = Archiver(1)
        return Archiver._inst

    def status(self):
        return self._status

    def progress(self):
        return self._progress

    def reset(self):
        self._status = 'Waiting'

    def archive_file(self):
        return self._archive_file_path
