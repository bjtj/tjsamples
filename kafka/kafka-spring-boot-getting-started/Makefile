all: build

build:
	gradle build

start-server:
	confluent local kafka start

stop-server:
	confluent local kafka stop

create-topic:
	confluent local kafka topic create purchases

producer:
	gradle bootRun --args='--producer'

consumer:
	gradle bootRun --args='--consumer'

clean:
	gradle clean

.PHONY: all build clean producer consumer start-server stop-server create-topic