#!/usr/bin/env bash

trap "exit" SIGINT
while :
do
    echo $(date) Writing fortune to /var/htdocs/index.html
    usr/games/fortune > /var/htdocs/index.html
    sleep 10
done
