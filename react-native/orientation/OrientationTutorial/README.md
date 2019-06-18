# react-native-orientation #

* https://github.com/yamill/react-native-orientation

```
yarn add react-native-orientation
react-native link react-native-orientation
```


## iOS ##

Edit `AppDelete.m`:

```
#import "Orientation.h" // <--- import

@implementation AppDelegate

  // ...

- (UIInterfaceOrientationMask)application:(UIApplication *)application supportedInterfaceOrientationsForWindow:(UIWindow *)window {
  return [Orientation getOrientation];
}

@end
```

## Android ##

Edit `MainActivity.java`:


    import android.content.Intent; // <--- import
    import android.content.res.Configuration; // <--- import

    public class MainActivity extends ReactActivity {
      ......
      @Override
      public void onConfigurationChanged(Configuration newConfig) {
        super.onConfigurationChanged(newConfig);
        Intent intent = new Intent("onConfigurationChanged");
        intent.putExtra("newConfig", newConfig);
        this.sendBroadcast(intent);
    }

      ......

    }
