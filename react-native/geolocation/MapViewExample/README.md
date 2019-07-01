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

# Tip -- ignore api-key.xml changed #

```
$ git update-index --assume-unchanged api-key.xml
```
