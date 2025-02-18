# Run Your First App #

<https://www.graalvm.org/latest/reference-manual/native-image/>

## Prerequisites ##

<https://www.graalvm.org/latest/reference-manual/native-image/#prerequisites>

Check this.

## `[ERROR] Test configuration file wasn't found. Make sure that test execution wasn't skipped.` ##

<https://github.com/graalvm/native-build-tools/blob/fb962b94f9af2cc04f73624d30a6b7c4dfee3768/docs/src/docs/asciidoc/maven-plugin.adoc#version-compatibility>

Disabling testing support

e.g.)

``` shell
mvn -Pnative package -DskipTests
```

