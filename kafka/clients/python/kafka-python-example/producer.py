from dotenv import load_dotenv
from kafka import KafkaProducer
from kafka.errors import KafkaError
import msgpack
import json
import os
import logging

logging.basicConfig(level=logging.DEBUG,
                    format='[%(asctime)s] %(levelname).1s %(message)s',
                    datefmt='%Y-%m-%d %H:%M:%S')
logger = logging.getLogger("producer")
logger.setLevel(logging.DEBUG)

load_dotenv()

bootstrap_server = os.getenv('bootstrap_server', 'localhost:9092')
logger.debug('bootstrap_server: ' + bootstrap_server)

producer = KafkaProducer(bootstrap_servers=[bootstrap_server])

# Asynchronous by default
future = producer.send('my-topic', b'raw_bytes')

# Block for 'synchronous' sends
try:
    record_metadata = future.get(timeout=10)
except KafkaError as err:
    # Decide what to do if produce request failed...
    logger.error(err)
    exit(1)

# Successful result returns assigned partition and offset
logger.debug(record_metadata.topic)
logger.debug(record_metadata.partition)
logger.debug(record_metadata.offset)

# produce keyed messages to enable hashed partitioning
producer.send('my-topic', key=b'foo', value=b'bar')

# encode objects via msgpack
producer = KafkaProducer(value_serializer=msgpack.dumps, bootstrap_servers=[bootstrap_server])
producer.send('msgpack-topic', {'key': 'value'})

# produce json messages
producer = KafkaProducer(value_serializer=lambda m: json.dumps(m).encode('ascii'))
producer.send('json-topic', {'key': 'value'})

# produce asynchronously
producer = KafkaProducer(bootstrap_servers=[bootstrap_server])
for _ in range(100):
    producer.send('my-topic', b'msg')

def on_send_success(record_metadata):
    logger.debug(record_metadata.topic)
    logger.debug(record_metadata.partition)
    logger.debug(record_metadata.offset)

def on_send_error(excp):
    logger.error('I am an errback', exc_info=excp)
    # handle exception

# produce asynchronously with callbacks
producer.send('my-topic', b'raw_bytes').add_callback(on_send_success).add_errback(on_send_error)

# block until all async messages are sent
producer.flush()

# configure multiple retries
producer = KafkaProducer(retries=5, bootstrap_servers=[bootstrap_server])
