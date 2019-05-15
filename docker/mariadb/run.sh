#!/bin/bash

# https://hub.docker.com/_/mariadb

BASE=$PWD

docker run --name mariadb -d \
       --restart unless-stopped \
       -p 53306:3306 \
       -v $BASE/db:/var/lib/mysql \
       -e MYSQL_ROOT_PASSWORD=secret \
       mariadb \
       --character-set-server=utf8 --collation-server=utf8_unicode_ci \
       --innodb-flush-log-at-trx-commit=0
