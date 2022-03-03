# Running Docker Containers as Current Host User #

<https://jtreminio.com/blog/running-docker-containers-as-current-host-user/>

## OK, run it as an non-root internal user? ##

* root works great inside the container but is annoying to work with on the host system, and
* your local user works great on your host system, but will quickly run into permission problems inside the container.


## Try sharing /etc/passwd! ##

* host system does not know about container’s` /etc/passwd`, and
* container does not know about the host system’s` /etc/passwd`


Local machine:

```shell
$ ls -lan
total 18
drwxrwxr-x   4 1000     1000     4096 2022-03-03 19:23 .
drwxrwxr-x  15 1000     1000     4096 2022-03-03 17:49 ..
```

Container:

```shell
$ docker container run --rm \
       -v ${PWD}:/var/www \
       -w /var/www \
       -u $(id -u ${USER}):$(id -g ${USER}) \
       jtreminio/php:7.2 ls -lan /var/lib/php/sessions
total 8
drwxr-xr-x 1 33 33 4096 Jan 13  2021 .
drwxr-xr-x 1  0  0 4096 Jan 14  2021 ..
```

## Ok so what actually works? ##

In the container, `www-data` maps to `33:33`. Why not change it so it maps to my host system's `jtreminio` with `1000:1000`?

In other words, make the container's `www-data` user/group ID be `1000:1000`.
