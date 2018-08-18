import sys
if sys.version_info.major == 2:
    from SimpleXMLRPCServer import SimpleXMLRPCServer
    from xmlrpclib import ServerProxy
else:
    from xmlrpc.server import SimpleXMLRPCServer
    from xmlrpc.client import ServerProxy
    

class RpcServer:
    def __init__(self, bind_addr):
        self._server = SimpleXMLRPCServer(bind_addr)

    def register_function(self, func, name):
        self._server.register_function(func, name)

    def serve_forever(self):
        self._server.serve_forever()
        

class RpcClient(ServerProxy):
    def __enter__(self):
        return self

    def __exit__(self, exc_type, exc_val, exc_tb):
        pass


