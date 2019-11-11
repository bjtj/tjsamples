# tmux #

http://man.openbsd.org/OpenBSD-current/man1/tmux.1

## EXAMPLES ##

http://man.openbsd.org/OpenBSD-current/man1/tmux.1#EXAMPLES

Changing the default prefix key

```
set-options -g prefix C-a
unbind-key C-b
bind-key C-a send-prefix
```

Turning the status line off, or changing its colour

```
set-option -g status off
set-option -g status-style bg=blue
```

Setting other options, such as the default command, or locking after 30 minutes of inactivity

```
set-option -g default-command "exec /bin/ksh"
set-option -g lock-after-time 1800
```

Creating new key bindings

```
bind-key b set-option status
bind-key / command-prompt "split-window 'exec man %%'"
bind-key S command-prompt "new-window -n %1 'ssh %1'"
```


