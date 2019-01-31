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

## Using docker

* https://www.elastic.co/guide/en/elasticsearch/reference/current/docker.html


### pull

```
$ docker pull docker.elastic.co/elasticsearch/elasticsearch:6.6.0
```


### Development mode

```
$ docker run -p 9200:9200 -p 9300:9300 -e "discovery.type=single-node" docker.elastic.co/elasticsearch/elasticsearch:6.6.0
```


### docker-compose

* `docker-compose.yml`

```
version: '2.2'
services:
  elasticsearch:
    image: docker.elastic.co/elasticsearch/elasticsearch:6.6.0
	container_name: elasticsearch
	environment:
	  - cluster.name=docker-cluster
	  - bootstrap.memory_lock=true
	  - "ES_JAVA_OPTS=-Xms512m -Xmx512m"
	ulimits:
	  memlock:
	    soft: -1
		hard: -1
	volumes:
	  - esdata1:/usr/share/elasticsearch/data
	ports:
	  - 9200:9200
	networks:
	  - esnet
  elasticsearch2:
    image: docker.elastic.co/elasticsearch/elasticsearch:6.6.0
	container_name: elasticsearch2
	environment:
	  - cluster.name=docker-cluster
	  - bootstrap.memory_lock=true
	  - "ES_JAVA_OPTS=-Xms512m -Xmx512m"
	  - "discovery.zen.ping.unicast.hosts=elasticsearch"
	ulimits:
	  memlock:
	    soft: -1
		hard: -1
    volumes:
	  - esdata2:/usr/share/elasticsearch/data
	networks:
	  - esnet
	  
volumes:
  esdata1:
    driver: local
  esdata2:
    driver: local
	
networks:
  esnet:
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


## Using docker

* https://www.elastic.co/guide/en/kibana/current/docker.html


### pull

```
$ docker pull docker.elastic.co/kibana/kibana:6.6.0
```


### docker-compose `kibana.yml`

```
version: '2'
services:
  kibana:
    image: docker.elastic.co/kibana/kibana:6.6.0
	volumes:
	  - ./kibana.yml:/usr/share/kibana/config/kibana.yml
```
