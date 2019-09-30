# Apache Thrift #

https://thrift.apache.org/


# Installation #

https://thrift.apache.org/docs/install/


## Debian/Ubuntu install ##

https://thrift.apache.org/docs/install/debian

```
sudo apt install automake bison flex g++ git libboost-all-dev libevent-dev libssl-dev libtool make pkg-config
```

## Building from source ##

https://thrift.apache.org/docs/BuildingFromSource

```
./bootstrap.sh
./configure
make
make check
sh test/test.sh
sudo make install
```


# `#error "This file was generated using the moc from 4.8.7. It"` #

https://github.com/omnisci/omniscidb/issues/101


```
--with-qt5=no
```


e.g.)

```
./configure --without-qt5 --without-qt4 --without-ruby --without-php --without-cl
```


# Java #

https://github.com/apache/thrift/blob/master/lib/java/README.md

```
cd $THRIFT/lib/java
make
./gradlew
```

check `$THRIFT/lib/java/build/libs/libthrift-0.12.0.jar`


# Python #

```
cd $THRIFT/lib/py
sudo python setup.py install
```
