all: helloworld_pb2.py


helloworld_pb2.py:
	python -m grpc_tools.protoc -I../protos --python_out=. --grpc_python_out=. ../protos/helloworld.proto
