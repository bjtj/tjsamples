# gRPC #

https://www.grpc.io/


# Protocol Buffers #

https://developers.google.com/protocol-buffers/docs/overview


## Python ##

https://developers.google.com/protocol-buffers/docs/pythontutorial

```python
protoc -I=$SRC_DIR --python_out=$DST_DIR $SRC_DIR/addressbook.proto
```

e.g.)

```python
python -m grpc_tools.protoc -I../protos --python_out=. --grpc_python_out=. ../protos/helloworld.proto
```

## Java ##

https://developers.google.com/protocol-buffers/docs/javatutorial

```java
protoc -I=$SRC_DIR --java_out=$DST_DIR $SRC_DIR/addressbook.proto
```

e.g.)

```java
protoc -I../protos --java_out=. ../protos/helloworld.proto
```
