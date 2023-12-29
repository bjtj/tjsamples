# Getting Started (Spring Boot) #

<https://developer.confluent.io/get-started/spring-boot/#introduction>

## Start server (local) ##

Requirements:

- Docker
- Confluent CLI ([installation](https://docs.confluent.io/confluent-cli/current/install.html?session_ref=https://github.com/bjtj/tjsamples/tree/main/kafka&_gl=1*1asxzb1*_ga*MTg1NjU3NDMyOS4xNzAzODcyMzU5*_ga_D2D3EGKSGD*MTcwMzg3MjM1OC4xLjEuMTcwMzg3NDM0NS40OC4wLjA.&_ga=2.10177277.974372556.1703872360-1856574329.1703872359))

``` shell
confluent local kafka start
```

Note the `Plaintext Ports` printed in your terminal, which you will use when configuring the client in the next step.

e.g.)

``` shell
...
+-----------------+-------+
| Kafka REST Port | 8082  |
| Plaintext Ports | 62097 |
+-----------------+-------+
Started Confluent Local containers "af10d74c84".
To continue your Confluent Local experience, run `confluent local kafka topic create <topic>` and `confluent local kafka topic produce <topic>`
```

## Edit Kafka Server URL ##

Edit `bootstrap-servers` in `src\main\resources\application.yaml`.

e.g.) Apply `Plaintext Ports`

``` yaml
spring:
  kafka:
    bootstrap-servers: localhost:62097
...
```

## Create Topic ##

``` shell
confluent local kafka topic create purchases
```

## Test ##

Producer

``` shell
gradle bootRun --args='--producer'
```

Consumer

``` shell
gradle bootRun --args='--consumer'
```

## Stop server ##

``` shell
confluent local kafka stop
```
