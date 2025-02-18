@echo off

IF NOT EXIST target\helloworld.exe (
  make
)

target\helloworld.exe
