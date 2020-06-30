# Creating a Linux service with systemd #

<https://medium.com/@benmorel/creating-a-linux-service-with-systemd-611b5c8b91d6>


run

```shell
$ php server.php
```

test

```shell
$ nc -u 127.0.0.1 10000
```


`/etc/systemd/system/rot13.service`

```
[Unit]
Description=ROT13 demo service
After=network.target
StartLimitIntervalSec=0

[Service]
Type=simple
Restart=always
RestartSec=1
User=centos
ExecStart=/usr/bin/env php /path/to/server.php

[Install]
WantedBy=multi-user.target
```

* set your actual username after `User=`
* set the proper path to your script in `ExecStart=`


```shell
$ systemctl start rot13
```

```shell
$ systemctl enable rot13
```
