#  Running an HTTP server on an Android app #

<https://diamantidis.github.io/2019/11/10/running-an-http-server-on-an-android-app>

## Ktor ##

<https://github.com/ktorio/ktor>

Ktor is an asynchronous framework for creating microservices, web applications and more. Written in Kotlin from the ground up.

### JSON ###

<https://ktor.io/docs/server-serialization.html#add_json_dependency>

e.g.) GSON

```kotlin
implementation("io.ktor:ktor-serialization-gson:$ktor_version")
```
