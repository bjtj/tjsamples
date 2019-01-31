# Docker

## Get Docker CE for Ubuntu

* https://docs.docker.com/install/linux/docker-ce/ubuntu/


## Docker Group

* https://docs.docker.com/install/linux/linux-postinstall/#manage-docker-as-a-non-root-user

```
$ sudo usermod -aG docker $USER
```


# Docker Compose

* https://docs.docker.com/compose/overview/

## Install Docker Compose

* https://docs.docker.com/compose/install/

```
$ sudo curl -L "https://github.com/docker/compose/releases/download/1.23.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
$ sudo chmod +x /usr/local/bin/docker-compose
$ docker-compose --version
```
