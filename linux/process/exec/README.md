# exec (system call) #

https://en.wikipedia.org/wiki/Exec_(system_call)


# execl(3) #

https://linux.die.net/man/3/execl

The exec() family of functions replaces the current process image with a new process image.

* execl
* execlp
* execle
* execv
* execvp
* execvpe


# wait(2) #

http://man7.org/linux/man-pages/man2/wait.2.html

wait() and waitpid()

The call `wait(&wstatus)` is equivalent to

```
waitpid(-1, &wstatus, 0);
```
