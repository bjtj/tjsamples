#!/usr/bin/env bash

mkdir -p output

SEG="1.20837,10.92546,30.51778,40.0881,46.40315,52.7922"

ffmpeg -i input.mp3 -f segment -segment_times $SEG -reset_timestamps 1 -map 0:a -c:a copy output/seg_%03d.mp3
