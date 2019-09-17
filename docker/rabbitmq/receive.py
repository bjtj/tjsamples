import pika
import argparse


def main():
    # https://www.rabbitmq.com/tutorials/tutorial-one-python.html

    parser = argparse.ArgumentParser()
    parser.add_argument('--host', type=str, default='localhost')
    args = parser.parse_args()

    # receive
    connection = pika.BlockingConnection(pika.ConnectionParameters(args.host))
    channel = connection.channel()
    channel.queue_declare(queue='hello')
    def callback(channel, method, properties, body):
        print(f'[x] Received: {body}')
    channel.basic_consume(queue='hello', auto_ack=True, on_message_callback=callback)
    print('[*] Waiting for messages. to exit press Ctrl+C')
    channel.start_consuming()

if __name__ == '__main__':
    main()
