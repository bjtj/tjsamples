from typing import Union
import sys
import time
import logging
from watchdog.observers import Observer
from watchdog.events import FileSystemEvent, FileSystemEventHandler, DirCreatedEvent, FileCreatedEvent, DirDeletedEvent, FileDeletedEvent, DirModifiedEvent, FileModifiedEvent, DirMovedEvent, FileMovedEvent


class MyHandler(FileSystemEventHandler):
    def on_any_event(self, event: FileSystemEvent):
        print(event, flush=True)

    def on_created(self, event: Union[DirCreatedEvent, FileCreatedEvent]):
        print('created:', event.src_path, 'DIR' if event.is_directory else 'FILE', flush=True)

    def on_deleted(self, event: Union[DirDeletedEvent, FileDeletedEvent]):
        print('deleted:', event.src_path, 'DIR' if event.is_directory else 'FILE', flush=True)

    def on_modified(self, event: Union[DirModifiedEvent, FileModifiedEvent]):
        print('modified:', event.src_path, 'DIR' if event.is_directory else 'FILE', flush=True)

    def on_moved(self, event: Union[DirMovedEvent, FileMovedEvent]):
        print('moved:', event.src_path, 'DIR' if event.is_directory else 'FILE', flush=True)


if __name__ == "__main__":
    logging.basicConfig(level=logging.INFO,
                        format='%(asctime)s - %(message)s',
                        datefmt='%Y-%m-%d %H:%M:%S')
    path = sys.argv[1] if len(sys.argv) > 1 else '.'
    # event_handler = LoggingEventHandler()
    event_handler = MyHandler()
    observer = Observer()
    observer.schedule(event_handler, path, recursive=True)
    observer.start()
    try:
        while True:
            time.sleep(1)
    except KeyboardInterrupt:
        observer.stop()
    observer.join()
