#!/bin/bash

# https://unix.stackexchange.com/a/325972
# https://unix.stackexchange.com/a/355476

echo $XDG_SESSION_TYPE

# or
# loginctl
# loginctl show-session <SESSION_ID> -p Type
