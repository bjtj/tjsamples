#!/usr/bin/env bash

docker run -ti --rm --net=host \
       --env="DISPLAY" \
       --volume=$HOME/.Xauthority:/root/.Xauthority:rw \
       ubuntu \
       bash -c "apt update && apt install -y x11-apps && xeyes"
