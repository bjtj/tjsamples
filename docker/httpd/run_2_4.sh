#!/usr/bin/env bash

# https://hub.docker.com/_/httpd

docker pull httpd:2.4
docker run -dit --name webserver1 -p 8080:80 -v $PWD:/usr/local/apache2/htdocs/ httpd:2.4
curl localhost:8080
