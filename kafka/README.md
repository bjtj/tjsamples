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



# Kafka #

<https://kafka.apache.org/documentation/>

Event Streaming

## Kafka APIs ##

* Admin API
* Producer API
* Consumer API
* Kafka Streams API
* Kafka Connect API


### Step 1: Get Kafka ###

[Download](https://www.apache.org/dyn/closer.cgi?path=/kafka/3.1.0/kafka_2.13-3.1.0.tgz) the latest Kafka release and extract it: 

```shell
$ tar -xzf kafka_2.13-3.1.0.tgz
$ cd kafka_2.13-3.1.0
```

### Step 2: Start the Kafka environment ###

*NOTE: Your local environment must have Java 8+ installed.*

Run the following commands in order to start all services in the correct order: 

```shell
# Start the ZooKeeper service
# Note: Soon, ZooKeeper will no longer be required by Apache Kafka.
$ bin/zookeeper-server-start.sh config/zookeeper.properties
```

Open another terminal session and run:

```shell
# Start the Kafka broker service
$ bin/kafka-server-start.sh config/server.properties
```

Once all services have successfully launched, you will have a basic Kafka environment running and ready to use. 

### Step 3: Create a topic to store your events ###

...
