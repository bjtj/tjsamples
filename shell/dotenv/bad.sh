#!/usr/bin/env bash


if [ -f .env ]; then
    export $(echo $(cat .env | sed 's/#.*//g'| xargs) | envsubst)
fi

printenv
