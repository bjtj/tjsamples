# Carthage #

* https://github.com/Carthage/Carthage

```
$ brew update
$ brew install carthage
```

* https://www.raywenderlich.com/165660/carthage-tutorial-getting-started-2

edit 'Cartfile'

# Run script #

```
/usr/local/bin/carthage copy-frameworks
```

add paths of frameworks to input


e.g.)

```
$ brew install carthage
$ cd project
$ sudo xcode-select -s /Applications/Xcode.app/Contents/Developer
$ carthage update --platform iOS
```
