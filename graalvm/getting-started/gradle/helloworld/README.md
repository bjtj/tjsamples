# Gradle #

<https://www.graalvm.org/latest/reference-manual/native-image/#gradle>

``` shell
mkdir helloworld && cd helloworld
gradle init --project-name helloworld --type java-application --test-framework junit-jupiter --dsl groovy
```
  
## Tested Environment ##

`GRAALVM_HOME`

``` batchfile
set GRAALVM_HOME=c:\Program Files\Java\graalvm-jdk-22.0.1+8.1
```

Graalvm buildtool version

``` groovy
    id 'org.graalvm.buildtools.native' version '0.10.5'
```

Java version

``` shell
java version "11.0.20" 2023-07-18 LTS
Java(TM) SE Runtime Environment 18.9 (build 11.0.20+9-LTS-256)
Java HotSpot(TM) 64-Bit Server VM 18.9 (build 11.0.20+9-LTS-256, mixed mode)
```

Gradle version

``` shell
$ ./gradlew.bat -version

------------------------------------------------------------
Gradle 8.5
------------------------------------------------------------

Build time:   2023-11-29 14:08:57 UTC
Revision:     28aca86a7180baa17117e0e5ba01d8ea9feca598

Kotlin:       1.9.20
Groovy:       3.0.17
Ant:          Apache Ant(TM) version 1.10.13 compiled on January 4 2023
JVM:          11.0.20 (Oracle Corporation 11.0.20+9-LTS-256)
OS:           Windows 11 10.0 amd64
```

## Compile ##

``` shell
./gradlew nativeCompile
```

## Run ##

``` shell
./app/build/native/nativeCompile/app
```
