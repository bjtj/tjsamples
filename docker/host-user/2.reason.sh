#!/usr/bin/env bash

ps -fe | grep dockerd


docker container run --rm \
       -v ${PWD}/workdir:/var/www \
       -w /var/www \
       jtreminio/php:7.2 whoami	# expected: root


docker container run --rm \
       -v ${PWD}/workdir:/var/www \
       -w /var/www \
       jtreminio/php:7.2 \
       bash -c "echo \$(id -u \${USER}):\$(id -g \${USER})" # expected: 0:0
