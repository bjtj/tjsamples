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

# Tab navigation #

https://reactnavigation.org/docs/en/tab-based-navigation.html

```
yarn add react-navigation-tabs react-native-screens react-native-reanimated react-native-gesture-handler 
```

**react-native-screens**

https://github.com/kmagiera/react-native-screens

**React Native Reanimated**

https://github.com/software-mansion/react-native-reanimated


# React Navigation Stack #

https://github.com/react-navigation/stack

```
yarn add react-navigation-stack @react-native-community/masked-view react-native-safe-area-context
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

