# Create React Native App #

```
npm install -g create-react-native-app
create-react-native-app first-project
cd first-project
npm start
```


# expo #

* https://expo.io/learn

```
npm install -g expo-cli
expo init my-new-project
cd my-new-project
expo start
```


## expo client ##

* https://itunes.apple.com/app/apple-store/id982107779


# Traditional #

```
npm install -g react-native-cli
react-native init FirstProject
cd FirstProject
react-native run-ios
react-native run-android
```


# iOS device on command line #

* https://stackoverflow.com/a/41632929/5676460

e.g.)

```
sudo npm install -g ios-deploy --unsafe-perm=true
react-native run-ios --device
```

**multiple devices**

* https://stackoverflow.com/a/38123523/5676460


e.g.)

```
react-native run-ios --simulator "iPhone 6s"
```


# Android release #

```
$ cd android
$ ./gradlew assembleRelease # check .apk file -- android/app/build/outputs/apk/release
$ ./gradlew bundleRelease # check .aab file -- android/app/build/outputs/bundle/release
```

# AndroidX - resolving dependecy issue #

android/gradle.properties

```
android.useAndroidX=true
android.enableJetifier=true
```

jetifier

1. `npm install --save-dev jetifier`
1. `npx jetify`
1. `npx react-native run-android`

