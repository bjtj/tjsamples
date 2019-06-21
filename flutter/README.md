# Installation #

* https://flutter.dev/docs/get-started/install/macos


Download .zip file and unzip it and append `flustter/bin/` to `PATH` env

e.g.)

```
$ cd ~/development
$ unzip ~/Downloads/flutter_macos_v1.5.4-hotfix.2-stable.zip
$ export PATH="$PATH:`pwd`/flutter/bin"
```

## iOS ##

```
$ sudo xcode-select --switch /Applications/Xcode.app/Contents/Developer
```

## open simulator ##

```
$ open -a Simulator
```


## Deploy to iOS devices ##

``` 
$ brew install --HEAD usbmuxd
$ brew link usbmuxd
$ brew install --HEAD libimobiledevice
$ brew install ideviceinstaller ios-deploy cocoapods
$ pod setup
```

### Xcode project team setting ###

```
open ios/Runner.xcworkspace
```

set team and 

```
$ flutter run
```

or

```
$ flutter run -d <deviceId>
```


# Test drive #

* https://flutter.dev/docs/get-started/test-drive?tab=terminal

```
$ flutter create myapp
$ flutter devices
$ flutter run
```
