# React Navigation #

https://reactnavigation.org


# Getting started #

https://reactnavigation.org/docs/en/getting-started.html

```
npm install react-navigation
```

```
npm run postinstall
```

5.x

```
npm install @react-navigation/native
```

```
npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view
```

# Tab navigation #

https://reactnavigation.org/docs/en/tab-based-navigation.html

```
yarn add react-navigation-tabs react-native-screens react-native-reanimated react-native-gesture-handler 
```

5.x

```
npm install @react-navigation/bottom-tabs
yarn add @react-navigation/bottom-tabs
```

**react-native-screens**

https://github.com/kmagiera/react-native-screens

**React Native Reanimated**

https://github.com/software-mansion/react-native-reanimated


# React Navigation Stack #

https://github.com/react-navigation/stack

```
yarn add react-navigation
yarn add react-navigation-stack @react-native-community/masked-view react-native-safe-area-context
```

5.x

```
npm install @react-navigation/stack
```

# App containers #

https://reactnavigation.org/docs/en/app-containers.html

```
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const RootStack = createStackNavigator({ /* your routes here */ });
const AppContainer = createAppContainer(RootStack);

// Now AppContainer is the main component for React to render
export default AppContainer;
```

> Invariant Violation: The navigation prop is missing for this navigator. In react-navigation 3 you must set up your app container directly. More info: https://reactnavigation.org/docs/en/app-containers.html
>
> This error is located at:
>     in Navigator (at App.js:33)
>     in App (at renderApplication.js:40)
>     in RCTView (at AppContainer.js:101)
>     in RCTView (at AppContainer.js:119)
>     in AppContainer (at renderApplication.js:39)
>
> getDerivedStateFromProps
>     createNavigator.js:1:1731
> renderRoot
>     [native code]:0
> runRootCallback
>     [native code]:0
> unstable_runWithPriority
>     scheduler.development.js:643:23
> renderApplication
>     renderApplication.js:52:52
> runnables.appKey.run
>     AppRegistry.js:116:10
> runApplication
>     AppRegistry.js:197:26
> callFunctionReturnFlushedQueue
>     [native code]:0



# Route prop reference #

https://reactnavigation.org/docs/en/route-prop.html

route
* key
* name
* params


```
function ProfileScreen({ navigation: { route } }) {
  return (
    <View>
      <Text>This is the profile screen of the app</Text>
      <Text>{route.params.name}</Text>
    </View>
  );
}
```


# Drawer #

https://reactnavigation.org/docs/en/drawer-based-navigation.html

```
npm install @react-navigation/drawer
```

# createMaterialTopTabNavigator #

https://reactnavigation.org/docs/en/material-top-tab-navigator.html

```
npm install @react-navigation/material-top-tabs react-native-tab-view
npm install react-native-reanimated react-native-gesture-handler
```


## swipeEnabled property not working in materialTopNavigator #167 ##

https://github.com/react-navigation/tabs/issues/167#issuecomment-535357500

> To everyone having this issue please note that you even though you're on ReactNative 0.60+ you will still have to do the part staying "To finalize installation of react-native-gesture-handler" of the getting started guide


```
package com.reactnavigation.example;

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
+        return new RNGestureHandlerEnabledRootView(MainActivity.this);
+      }
+    };
+  }
}
```
