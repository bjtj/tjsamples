# Deploy a stack to a swarm #

<https://docs.docker.com/engine/swarm/stack-deploy/>

Docker stack 은 build 명령을 수행할 수 없기 때문에 docker compose 로 실행하여 먼저 빌드 수행

```shell
$ docker-compose up -d
```

```shell
$ docker-compose down --volumes
```

이미지 push

```shell
$ docker-compose push
```

## Deploy the stack to the swarm ##

```shell
$ docker stack deploy --compose-file docker-compose.yml stackdemo
```

## Clean up ##

3. Bring the stack down with docker stack rm:

```shell
$ docker stack rm stackdemo
```

4. Bring the registry down with docker service rm:

```shell
$ docker service rm registry
```

5. If you’re just testing things out on a local machine and want to bring your Docker Engine out of swarm mode, use docker swarm leave:

```shell
$ docker swarm leave --force
```


# docker-compose push #

<https://docs.docker.com/compose/reference/push/>

Pushes images for services to their respective `registry/repository`.
