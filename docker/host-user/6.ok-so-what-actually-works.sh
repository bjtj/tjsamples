#!/usr/bin/env bash

function test_it {
    docker container run --rm \
	   -v ${PWD}:/var/www \
	   -w /var/www \
	   -u $(id -u ${USER}):$(id -g ${USER}) \
	   jtreminio/php:test ls -lan /var/lib/php/sessions
}

function clear_image {
    docker rmi jtreminio/php:test
}

clear_image

echo "${id -u}:${id -g}"

# ---
# First, delete the user and group:
#

docker build -t jtreminio/php:test - <<EOF
FROM jtreminio/php:7.2

RUN userdel -f www-data &&\
    if getent group www-data ; then groupdel www-data; fi
EOF

test_it

# output:
# 
# total 8
# drwxr-xr-x 1 33 33 4096 Jan 13  2021 .
# drwxr-xr-x 1  0  0 4096 Jan 14  2021 ..

clear_image


# ---
# Next, we can generate the user and group with our IDs:
#

docker build -t jtreminio/php:test - <<EOF
FROM jtreminio/php:7.2

ARG USER_ID=1000
ARG GROUP_ID=1000

RUN userdel -f www-data &&\
    if getent group www-data ; then groupdel www-data; fi &&\
    groupadd -g \${GROUP_ID} www-data &&\
    useradd -l -u \${USER_ID} -g www-data www-data &&\
    install -d -m 0755 -o www-data -g www-data /home/www-data
EOF

test_it

# output:
# 
# total 8
# drwxr-xr-x 1 33 33 4096 Jan 13  2021 .
# drwxr-xr-x 1  0  0 4096 Jan 14  2021 ..

clear_image


# ---
# Thankfully, the rallying cry of containers is to have them do one single thing, which limits the number of places we need to update. In this image, it is not very many at all:
# 

docker build -t jtreminio/php:test - <<EOF
FROM jtreminio/php:7.2

ARG USER_ID=1000
ARG GROUP_ID=1000

RUN userdel -f www-data &&\
    if getent group www-data ; then groupdel www-data; fi &&\
    groupadd -g \${GROUP_ID} www-data &&\
    useradd -l -u \${USER_ID} -g www-data www-data &&\
    install -d -m 0755 -o www-data -g www-data /home/www-data &&\
    chown --changes --silent --no-dereference --recursive \
          --from=33:33 \${USER_ID}:\${GROUP_ID} \
        /home/www-data \
        /.composer \
        /var/run/php-fpm \
        /var/lib/php/sessions
EOF

test_it

# output:
# 
# total 8
# drwxr-xr-x 1 1000 1000 4096 Jan 13  2021 .
# drwxr-xr-x 1    0    0 4096 Jan 14  2021 ..

clear_image


# ---
# Finally, it does not hurt to be explicit about the user we want to run the container:
# 

docker build -t jtreminio/php:test - <<EOF
FROM jtreminio/php:7.2

ARG USER_ID=1000
ARG GROUP_ID=1000

RUN userdel -f www-data &&\
    if getent group www-data ; then groupdel www-data; fi &&\
    groupadd -g \${GROUP_ID} www-data &&\
    useradd -l -u \${USER_ID} -g www-data www-data &&\
    install -d -m 0755 -o www-data -g www-data /home/www-data &&\
    chown --changes --silent --no-dereference --recursive \
          --from=33:33 \${USER_ID}:\${GROUP_ID} \
        /home/www-data \
        /.composer \
        /var/run/php-fpm \
        /var/lib/php/sessions
        
USER www-data
EOF

test_it

# output:
# 
# total 8
# drwxr-xr-x 1 1000 1000 4096 Jan 13  2021 .
# drwxr-xr-x 1    0    0 4096 Jan 14  2021 ..

mkdir -p workdir3

docker container run --rm \
       -v ${PWD}/workdir3:/var/www \
       -w /var/www \
       jtreminio/php:test composer require psr/log

clear_image

