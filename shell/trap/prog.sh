#!/bin/bash

set -e

PID=$$

trap 'echo "[prog] interrupted" > .$PID.exit.log; exit;' INT TERM ERR

while true; do
    echo $(date) >> .$PID.log
    sleep 1;
done
