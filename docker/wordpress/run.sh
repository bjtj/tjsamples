#!/bin/bash

docker run \
       --name wp \
       --restart unless-stopped \
       --link mariadb:mariadb \
       -e WORDPRESS_DB_HOST=mariadb:3306 \
       -e WORDPRESS_DB_USER=root \
       -e WORDPRESS_DB_PASSWORD=secret \
       -p 9000:80 \
       -d \
       wordpress
