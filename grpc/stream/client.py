from concurrent import futures
import logging

import grpc

import streamer_pb2
import streamer_pb2_grpc


def generate_send_message():
    for i in range(10):
        yield streamer_pb2.SendRequest(text='Send index - {}'.format(i))

def generate_names():
    names = [
        'Steve',
        'James',
        'Julie',
        'Jason',
        'TJ'
    ]
    for name in names:
        yield streamer_pb2.CommunicateRequest(text=name)


def main():

    logging.basicConfig()
    
    with grpc.insecure_channel('[::]:50051') as channel:
        stub = streamer_pb2_grpc.StreamerStub(channel)

        # Send
        response = stub.Send(generate_send_message())
        print('Send response: {}'.format(response.ret))

        # Receive
        responses = stub.Receive(streamer_pb2.ReceiveRequest(text='hello'))
        for response in responses:
            print('Receive response: {}'.format(response.ret))

        # Communicate
        responses = stub.Communicate(generate_names())
        for response in responses:
            print('Communicate response: {}'.format(response.text))

if __name__ == '__main__':
    main()
    
