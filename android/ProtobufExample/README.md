# Protobuf Plugin for Gradle #

<https://github.com/google/protobuf-gradle-plugin>

build.gradle

```kotlin
plugins {
    id("com.google.protobuf") version "0.9.4"
}

dependencies {

    implementation("com.google.protobuf:protobuf-javalite:3.17.3")
}

protobuf {
    protoc {
        artifact = "com.google.protobuf:protoc:3.17.3"
    }
    generateProtoTasks {
        all().forEach { task ->
            task.builtins {
                register("java") {
                    option("lite")
                }
            }
        }
    }
}
```

# Download #

<https://github.com/protocolbuffers/protobuf/releases/tag/v26.1>

protoc
