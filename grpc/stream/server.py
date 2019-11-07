from concurrent import futures
import logging

import grpc

import streamer_pb2
import streamer_pb2_grpc

class Streamer(streamer_pb2_grpc.StreamerServicer):
    def Send(self, request_iter, context):
        for item in request_iter:
            print(item.text)
        return streamer_pb2.Reply(ret=1)

    def Receive(self, request, context):
        for i in range(20):
            yield streamer_pb2.ReceiveResponse(ret=i)

    def Communicate(self, request_iter, context):
        for item in request_iter:
            msg = 'Hello {}.'.format(item.text)
            print(msg)
            yield streamer_pb2.CommunicateResponse(text=msg)


def main():

    logging.basicConfig()
    
    server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
    streamer_pb2_grpc.add_StreamerServicer_to_server(Streamer(), server)
    server.add_insecure_port('[::]:50051')
    server.start()
    server.wait_for_termination()

if __name__ == '__main__':
    main()
