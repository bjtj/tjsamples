#!/usr/bin/env bash

# docker run -d -p 7001:7001 -p 9002:9002 -v $PWD:/u01/oracle/properties store/oracle/weblogic:12.2.1.4

# docker run -p 7001:7001 -p 9002:9002 -v $PWD:/u01/oracle/properties store/oracle/weblogic:12.2.1.4 printenv

# https://github.com/oracle/docker-images/issues/1517#issuecomment-584318314
docker run -d -p 7001:7001 -p 9002:9002 -v $PWD:/u01/oracle/properties -e DOMAIN_NAME=base_domain store/oracle/weblogic:12.2.1.4

# https://localhost:9002/console
# user account -> domain.properties
