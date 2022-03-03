#!/usr/bin/env bash

groups www-data
# groups: ‘www-data’: no such us

# but, my case...
# www-data : www-data

docker container run --rm \
       -v ${PWD}:/var/www \
       -w /var/www \
       -u ${USER} \
       jtreminio/php:7.2 whoami
# docker: Error response from daemon: unable to find user jtreminio: no matching entries in passwd file.
