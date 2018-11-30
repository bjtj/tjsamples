#!/bin/bash

LIST_PATH=".list.txt"
IMGS=$(ls *.jpg)
if [ -f "$LIST_PATH" ]; then
    rm "$LIST_PATH"
fi
for ITEM in $IMGS; do
    echo "file $ITEM" >> "$LIST_PATH"
done


ffmpeg -y -f concat -safe 0 -i "$LIST_PATH" -c:v libx264 out.mp4
rm "$LIST_PATH"
