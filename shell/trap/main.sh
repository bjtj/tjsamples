#!/bin/bash

# http://kb.mit.edu/confluence/pages/viewpage.action?pageId=3907156

function handle_int()
{
    echo "[main] Interrupt handling!";
    exit
}

trap 'handle_int' INT TERM ERR
trap "kill 0" EXIT

./prog.sh &
PROG_PID=$!
echo "[main] prog pid is '$PROG_PID'"

echo "[main] Wait..."
wait
