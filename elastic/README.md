# Elastic search

## Installation

* https://www.elastic.co/kr/downloads/elasticsearch


e.g.)

```
$ tar xvf elasticsearch-6.6.0.tar.gz
$ cd elasticsearch-6.6.0
$ bin/elasticsearch
$ curl localhost:9200
```


## bind 0.0.0.0

* https://www.elastic.co/guide/en/elasticsearch/reference/current/bootstrap-checks.html

NOTE) Perhaps what you really want is Kibana

edit `config/elasticsearch.yml`

```
discovery.type: single-node
transport.host: 0.0.0.0
network.host: 0.0.0.0
```

# Kibana

## Installation

e.g.)

```
$ tar xvf kibana-6.6.0-linux-x86_64.tar.gz
$ cd kibana-6.6.0-linux-x86_64
$ bin/kibana
$ curl localhost:5601
```

## bind 0.0.0.0

edit `config/kibana.yml`

```
server.host: 0.0.0.0
```
