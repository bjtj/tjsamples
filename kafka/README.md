# Kafka Docker #

<https://developer.confluent.io/quickstart/kafka-docker/>

``` shell
docker-compose up -d
```

``` shell
docker exec broker kafka-topics --bootstrap-server broker:9092 --create --topic quickstart
```

``` shell
docker exec --interactive --tty broker kafka-console-producer --bootstrap-server broker:9092 --topic quickstart
```

``` shell
docker exec --interactive --tty broker kafka-console-consumer --bootstrap-server broker:9092 --topic quickstart --from-beginning
```

```shell
docker-compose down
```
