#!/usr/bin/env bash

mkdir -p workdir2

docker container run --rm \
       -v ${PWD}/workdir2:/var/www \
       -w /var/www \
       -u $(id -u ${USER}):$(id -g ${USER}) \
       jtreminio/php:7.2 composer require psr/log


docker container run --rm \
       -v ${PWD}/workdir2:/var/www \
       -w /var/www \
       -u $(id -u ${USER}):$(id -g ${USER}) \
       jtreminio/php:7.2 whoami	# expected: whoami: cannot find name for user ID 1000

docker container run --rm \
       -v ${PWD}/workdir2:/var/www \
       -w /var/www \
       -u $(id -u ${USER}):$(id -g ${USER}) \
       jtreminio/php:7.2 \
       bash -c "echo \$(id -u \${USER}):\$(id -g \${USER})" # expected: 1000:1000
