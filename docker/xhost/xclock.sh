#!/usr/bin/env bash

# https://www.edureka.co/community/10736/how-to-run-multiple-commands-in-docker-at-once
docker run -ti --rm \
       --net host \
       -e DISPLAY=$DISPLAY \
       -v /tmp/.X11-unix:/tmp/.X11-unix \
       -v $HOME/.Xauthority:/root/.Xauthority:rw \
       ubuntu \
       bash -c "apt update && apt install -y x11-apps && xclock"
