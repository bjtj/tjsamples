* https://github.com/react-native-community/react-native-linear-gradient

```
yarn add react-native-linear-gradient
react-native link react-native-linear-gradient
```


## iOS ##

* ~~Podfile~~

```
pod 'BVLinearGradient', :path => '../node_modules/react-native-linear-gradient'
```

1. open `ios/???.xcodeproj`
1. add `../node_modules/react-native-linear-gradient/BVLinearGradient.xcodeproj` to build pharse library


```
import LinearGradient from 'react-native-linear-gradient';
```


## Android ##

edit `android/settings.gradle`

```
...
include ':react-native-linear-gradient'
project(':react-native-linear-gradient').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-linear-gradient/android')
```

edit `android/app/build.gradle`

```
dependencies {
    ...
    implementation project(':react-native-linear-gradient')
}
```

edit `android/app/src/main/java/com/{YOUR_APP_NAME}/MainApplication.java`

```
//...
import com.BV.LinearGradient.LinearGradientPackage; // <--- This!
//...
@Override
protected List<ReactPackage> getPackages() {
  return Arrays.<ReactPackage>asList(
    new MainReactPackage(),
    new LinearGradientPackage() // <---- and This!
  );
}
```
