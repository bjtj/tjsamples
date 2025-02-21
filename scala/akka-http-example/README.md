# Akka Http Example #

## Requirements ##

Java 11(55)

## Dependencies ##

<https://doc.akka.io/libraries/akka-core/current/typed/actor-lifecycle.html#dependency>

``` scala
resolvers += "Akka library repository".at("https://repo.akka.io/maven")
```

### actor ###

<https://doc.akka.io/libraries/akka-core/current/typed/actors.html#module-info>

``` scala
val AkkaVersion = "2.10.2"
libraryDependencies ++= Seq(
  "com.typesafe.akka" %% "akka-actor-typed" % AkkaVersion,
  "com.typesafe.akka" %% "akka-actor-testkit-typed" % AkkaVersion % Test
)
```

### http ###

<https://doc.akka.io/libraries/akka-http/current/introduction.html#using-akka-http>

``` scala
val AkkaVersion = "2.10.0"
val AkkaHttpVersion = "10.7.0"
libraryDependencies ++= Seq(
  "com.typesafe.akka" %% "akka-actor-typed" % AkkaVersion,
  "com.typesafe.akka" %% "akka-stream" % AkkaVersion,
  "com.typesafe.akka" %% "akka-http" % AkkaHttpVersion
)
```
