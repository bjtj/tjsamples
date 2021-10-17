# Cordova #

<https://cordova.apache.org/>

**Get Started Fast**

```
npm install -g cordova
cordova create MyApp
cd MyApp cordova platform add browser
cordova run browser
```

# Examples #

<https://cordova.apache.org/docs/en/10.x/reference/cordova-cli/index.html>

```
# Create a cordova project
cordova create myApp com.myCompany.myApp myApp
cd myApp
# Add camera plugin to the project and remember that in config.xml & package.json.
cordova plugin add cordova-plugin-camera
# Add android platform to the project and remember that in config.xml & package.json.
cordova platform add android
# Check to see if your system is configured for building android platform.
cordova requirements android
# Build the android and emit verbose logs.
cordova build android --verbose
# Run the project on the android platform.
cordova run android
# Build for android platform in release mode with specified signing parameters.
cordova build android --release -- --keystore="..\android.keystore" --storePassword=android --alias=mykey
```

# Create your first Cordova app #

<https://cordova.apache.org/docs/en/10.x/guide/cli/index.html>

```shell
cordova platform add android
```

```shell
cordova build
```

```shell
cordova emulate android
```

```shell
cordova run android
```

## Add Plugins ##

```shell
cordova plugin search camera
```

```shell
cordova plugin add cordova-plugin-camera
Fetching plugin "cordova-plugin-camera@~2.1.0" via npm
Installing "cordova-plugin-camera" for android
Installing "cordova-plugin-camera" for ios
```

```shell
cordova plugin ls
cordova-plugin-camera 2.1.0 "Camera"
cordova-plugin-whitelist 1.2.1 "Whitelist"
```
