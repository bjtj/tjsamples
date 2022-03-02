@echo off
setlocal

python -m pip install grpcio google-api-python-client
if not exist grpc (
   git clone -b v1.43.0 https://github.com/grpc/grpc
)
cd grpc/examples/python/helloworld
@START /b cmd /c python greeter_server.py
python greeter_client.py
