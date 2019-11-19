all: helloworld_pb2.py helloworld_pb2_grpc.py


helloworld_pb2.py helloworld_pb2_grpc.py:
	python -m grpc_tools.protoc -I../protos --python_out=. --grpc_python_out=. ../protos/helloworld.proto


clean:
	rm -rf helloworld_pb2.py helloworld_pb2_grpc.py
