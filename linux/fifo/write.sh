#!/bin/bash

FIFO_FILE="/tmp/myfifo"

if [ ! -e "$FIFO_FILE" ]; then
	echo "cannot access - $FIFO_FILE" >&2
	exit 1
fi

MSG="TEST"
if [ -n "$1" ]; then
	MSG="$1"
fi
echo "$MSG" >"$FIFO_FILE"
