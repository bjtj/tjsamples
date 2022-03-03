#!/usr/bin/env bash

ls -lan
# total 18
# drwxrwxr-x   4 1000     1000     4096 2022-03-03 19:23 .
# drwxrwxr-x  15 1000     1000     4096 2022-03-03 17:49 ..

docker container run --rm \
       -v ${PWD}:/var/www \
       -w /var/www \
       -u $(id -u ${USER}):$(id -g ${USER}) \
       jtreminio/php:7.2 ls -lan /var/lib/php/sessions

# total 8
# drwxr-xr-x 1 33 33 4096 Jan 13  2021 .
# drwxr-xr-x 1  0  0 4096 Jan 14  2021 ..
