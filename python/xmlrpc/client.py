from rpc import RpcClient

with RpcClient('http://localhost:8000') as client:
    print("3 is even: {}".format(client.is_even(3)))
    print("100 is even: {}".format(client.is_even(100)))
