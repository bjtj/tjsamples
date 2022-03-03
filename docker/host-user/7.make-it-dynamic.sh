#!/usr/bin/env bash

mkdir -p workdir4

docker image build \
       --build-arg USER_ID=$(id -u ${USER}) \
       --build-arg GROUP_ID=$(id -g ${USER}) \
       -t php_test \
       .


docker container run --rm \
       -v ${PWD}/workdir4:/var/www \
       -w /var/www \
       php_test:latest composer require psr/log


ls -lan workdir4/

# total 20
# drwxrwxr-x 3 1000 1000 4096  3월  3 21:07 .
# drwxrwxr-x 6 1000 1000 4096  3월  3 21:07 ..
# -rw-r--r-- 1 1000 1000   53  3월  3 21:07 composer.json
# -rw-r--r-- 1 1000 1000 2219  3월  3 21:07 composer.lock
# drwxr-xr-x 4 1000 1000 4096  3월  3 21:07 vendor

docker container run --rm \
       -v ${PWD}/workdir4:/var/www \
       -w /var/www \
       php_test:latest \
       bash -c "touch /var/lib/php/sessions/foo && echo \$?"

# 0
