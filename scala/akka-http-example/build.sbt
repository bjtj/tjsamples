import Dependencies._

ThisBuild / scalaVersion     := "2.13.15"
ThisBuild / version          := "0.1.0-SNAPSHOT"
ThisBuild / organization     := "com.example"
ThisBuild / organizationName := "example"

resolvers += "Akka library repository".at("https://repo.akka.io/maven")

val AkkaVersion = "2.10.0"
val AkkaHttpVersion = "10.7.0"

lazy val root = (project in file("."))
  .settings(
    name := "akka-http-example",
    libraryDependencies ++= Seq(
      munit % Test,
      "com.typesafe.akka" %% "akka-actor-typed" % AkkaVersion,
      "com.typesafe.akka" %% "akka-stream" % AkkaVersion,
      "com.typesafe.akka" %% "akka-http" % AkkaHttpVersion
    )
  )

// See https://www.scala-sbt.org/1.x/docs/Using-Sonatype.html for instructions on how to publish to Sonatype.
