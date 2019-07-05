# react-native-maps #

* https://github.com/react-native-community/react-native-maps


# Installation #

* https://github.com/react-native-community/react-native-maps/blob/master/docs/installation.md


## Enabling Google Maps on iOS ##

edit `AppDelegate.m`

```
+ #import <GoogleMaps/GoogleMaps.h>

@implementation AppDelegate
...

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
+  [GMSServices provideAPIKey:@"_YOUR_API_KEY_"]; // add this line using the api key obtained from Google Console
...
```

# Android #

edit `android/settings.gradle`:

```
...
include ':react-native-maps'
project(':react-native-maps').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-maps/lib/android')
```


edit `android/app/build.gradle`:

```
...
dependencies {
  ...
  implementation project(':react-native-maps')
}
```

edit `build.gradle`:

```
buildscript {...}
allprojects {...}

/**
 + Project-wide Gradle configuration properties
 */
ext {
    compileSdkVersion   = 26
    targetSdkVersion    = 26
    buildToolsVersion   = "26.0.2"
    supportLibVersion   = "26.1.0"
    googlePlayServicesVersion = "16.1.0" // or set latest version
    androidMapsUtilsVersion = "0.5+"
}
```

edit `android/app/src/main/AndroidManifest.xml`:

```
<application>
   <!-- You will only need to add this meta-data tag, but make sure it's a child of application -->
   <meta-data
     android:name="com.google.android.geo.API_KEY"
     android:value="Your Google maps API Key Here"/>
</application>
```

edit `MainApplication.java`:

```
import com.airbnb.android.react.maps.MapsPackage;
...
    @Override
    protected List<ReactPackage> getPackages() {
        return Arrays.<ReactPackage>asList(
                new MainReactPackage(),
                new MapsPackage()
        );
    }
```

# Tip -- ignore api-key.xml changed #

```
$ git update-index --assume-unchanged api-key.xml
```
