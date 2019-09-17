#!/bin/bash

docker run \
       -it --rm \
       --net host \
       -e 'ACTIVEMQ_CONFIG_MINMEMORY=512' \
       -e 'ACTIVEMQ_CONFIG_MAXMEMORY=2048'\
       --name='activemq' \
       -P \
       webcenter/activemq:latest
