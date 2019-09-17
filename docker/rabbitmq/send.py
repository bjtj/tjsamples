import pika
import argparse


def main():
    # https://www.rabbitmq.com/tutorials/tutorial-one-python.html

    parser = argparse.ArgumentParser()
    parser.add_argument('--host', type=str, default='localhost')
    args = parser.parse_args()

    # publish
    connection = pika.BlockingConnection(pika.ConnectionParameters(args.host))
    channel = connection.channel()
    channel.queue_declare(queue='hello')
    channel.basic_publish(exchange='', routing_key='hello', body='Hello World!')
    print('[x] Sent "Hello World!"')
    connection.close()


if __name__ == '__main__':
    main()
