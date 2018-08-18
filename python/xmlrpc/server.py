from __future__ import print_function
import sys
if sys.version_info.major == 2:
    from SimpleXMLRPCServer import SimpleXMLRPCServer
else:
    from xmlrpc.server import SimpleXMLRPCServer

def is_even(n):
    return n % 2 == 0

server = SimpleXMLRPCServer(('localhost', 8000))
print('Listening on port 8000...')
server.register_function(is_even, 'is_even')
server.serve_forever()

