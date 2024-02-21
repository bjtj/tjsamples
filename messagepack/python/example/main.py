import msgpack

buf = msgpack.packb({'a': 'A'})
print(type(buf)) # <class 'bytes'>
print(msgpack.unpackb(buf)) # {'a': 'A'}
