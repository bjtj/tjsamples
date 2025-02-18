@echo off

IF NOT EXIST target\helloworld.exe (
  build.bat
)

target\helloworld.exe
