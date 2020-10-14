#!/usr/bin/env bash


while :; do
    echo "$RANDOM"
    echo "$RANDOM"
    echo "$RANDOM"
    sleep 0.2
    tput cuu1 # move cursor up by one line
    tput el # clear the line
    tput cuu1
    tput el
    tput cuu1
    tput el
done
