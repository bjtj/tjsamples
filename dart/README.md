

# Install the Dart SDK #

* https://dart.dev/get-dart

## MacOS ##

```
$ brew tap dart-lang/dart
$ brew install dart
```


## Linux ##

```
$ sudo apt-get update
$ sudo apt-get install apt-transport-https
$ sudo sh -c 'curl https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add -'
$ sudo sh -c 'curl https://storage.googleapis.com/download.dartlang.org/linux/debian/dart_stable.list > /etc/apt/sources.list.d/dart_stable.list'

$ sudo apt update
$ sudo apt install dart
```

