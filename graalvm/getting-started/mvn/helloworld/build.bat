@echo off

setlocal enabledelayedexpansion

IF EXIST .GRAALVMHOME (
   set /p GRAALVM_HOME=<".GRAALVMHOME"
)

IF EXIST .JAVAHOME (
   set /p JAVA_HOME=<".JAVAHOME"
)

mvn -Pnative package -DskipTests
