#!/usr/bin/env bash

mkdir -p workdir

docker container run --rm \
       -v ${PWD}/workdir:/var/www \
       -w /var/www \
       jtreminio/php:7.2 composer require psr/log

3cho '' > workdir/composer.json	# expected: fail
