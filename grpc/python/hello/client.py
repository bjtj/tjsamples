import logging

import grpc

import helloworld_pb2
import helloworld_pb2_grpc

import sys

def main():

    if len(sys.argv) > 1:
        name = sys.argv[1]
    else:
        name = 'you'


    with grpc.insecure_channel('localhost:50051') as channel:
        stub = helloworld_pb2_grpc.GreeterStub(channel)
        response = stub.SayHello(helloworld_pb2.HelloRequest(name=name))
    print('Greeter client received: ' + response.message)

if __name__ == '__main__':
    logging.basicConfig()
    main()
