# react-native-gesture-handler #

* https://kmagiera.github.io/react-native-gesture-handler/docs/state.html
* https://kmagiera.github.io/react-native-gesture-handler/docs/getting-started.html

```
yarn add react-native-gesture-handler
react-native link react-native-gesture-handler
```

## Android ##

edit `MainActivity.java`

```
package com.swmansion.gesturehandler.react.example;

import com.facebook.react.ReactActivity;
+ import com.facebook.react.ReactActivityDelegate;
+ import com.facebook.react.ReactRootView;
+ import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;

public class MainActivity extends ReactActivity {

  @Override
  protected String getMainComponentName() {
    return "Example";
  }

+  @Override
+  protected ReactActivityDelegate createReactActivityDelegate() {
+    return new ReactActivityDelegate(this, getMainComponentName()) {
+      @Override
+      protected ReactRootView createRootView() {
+       return new RNGestureHandlerEnabledRootView(MainActivity.this);
+      }
+    };
+  }
}
```

## iOS ##

no additional configuration required




# Other dependencies #

## react-navigation ##

```
yarn add react-navigation
```
