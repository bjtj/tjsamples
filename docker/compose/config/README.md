# Ways to set environment variables in Compose #

<https://docs.docker.com/compose/environment-variables/set-environment-variables/>

```
$ docker compose config
name: config
services:
  web:
    image: webapp:1.5
    networks:
      default: null
networks:
  default:
    name: config_default
```
