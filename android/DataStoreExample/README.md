# DataStore #

<https://developer.android.com/topic/libraries/architecture/datastore>

## Dependencies ##

preferences

```kotlin
implementation("androidx.datastore:datastore-preferences:1.1.1")
```

protobuf

```groovy
implementation("androidx.datastore:datastore:1.1.1")
implementation("com.google.protobuf:protobuf-javalite:3.17.3")
```

## Files in phone ##

e.g.) 

```
/data/data/com.example.datastore/files
/data/data/com.example.datastore/files/datastore
/data/data/com.example.datastore/files/datastore/settings.pb
/data/data/com.example.datastore/files/datastore/settings.preferences_pb
```
