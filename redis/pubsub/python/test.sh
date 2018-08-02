#!/bin/bash

set -e

python sub.py &

for i in $(seq 1 3); do
    python pub.py "SEQ: $i"
    sleep 1
done

wait
