#!/usr/bin/env python

import sys
sys.path.append('generated/')

from service import CrossPlatformService
from service.ttypes import *

from thrift import Thrift
from thrift.transport import TSocket
from thrift.transport import TTransport
from thrift.protocol import TBinaryProtocol


def main():
    # Make socket
    transport = TSocket.TSocket('localhost', 9090)

    # Buffering is critical. Raw sockets are very slow
    transport = TTransport.TBufferedTransport(transport)

    # Wrap in a protocol
    protocol = TBinaryProtocol.TBinaryProtocol(transport)

    # Create a client to use the protocol encoder
    client = CrossPlatformService.Client(protocol)

    # Connect!
    transport.open()

    print(client.ping())
    print('ping()')

    # sum_ = client.add(1, 1)


if __name__ == '__main__':
    main()
