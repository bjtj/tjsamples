# inotify - monitoring filesystem events #

http://man7.org/linux/man-pages/man7/inotify.7.html


# Inotify Example: Introduction to Inotify with a C Program Example #

https://www.thegeekstuff.com/2010/04/inotify-c-program-example


e.g.)

``` c
struct inotify_event;

inotify_init();

wd = inotify_add_watch(fd, "/tmp", IN_CREATE | IN_DELETE);

inotify_rm_watch(fd, wd);
```
