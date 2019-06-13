# react-native-sqlite-storage #

* https://github.com/andpor/react-native-sqlite-storage

```
yarn add react-native-sqlite-storage
react-native link react-native-sqlite-storage
```


## iOS ##

?

## Android ##


edit `android/settings.gradle`:

```
// file: android/settings.gradle
...

include ':react-native-sqlite-storage'
project(':react-native-sqlite-storage').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-sqlite-storage/src/android')
```

edit `android/app/build.gradle`:

```
// file: android/app/build.gradle
...

dependencies {
    ...
    implementation project(':react-native-sqlite-storage')
}
```


edit `MainApplication.java`:

```
import org.pgsqlite.SQLitePluginPackage;

public class MainApplication extends Application implements ReactApplication {
  ......

  /**
   * A list of packages used by the app. If the app uses additional views
   * or modules besides the default ones, add more packages here.
   */
    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
        new SQLitePluginPackage(),   // register SQLite Plugin here
        new MainReactPackage());
    }
}
```
