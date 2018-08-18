# import sys
# if sys.version_info.major == 2:
#     from xmlrpclib import ServerProxy
# else:
#     from xmlrpc.client import ServerProxy

# proxy = ServerProxy("http://localhost:8000")
# print("3 is even: {}".format(proxy.is_even(3)))
# print("100 is even: {}".format(proxy.is_even(100)))


from rpc import RpcClient

# client = RpcClient('http://localhost:8000')
# print("3 is even: {}".format(client.is_even(3)))
# print("100 is even: {}".format(client.is_even(100)))

with RpcClient('http://localhost:8000') as client:
    print("3 is even: {}".format(client.is_even(3)))
    print("100 is even: {}".format(client.is_even(100)))
