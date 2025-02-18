@echo off

IF NOT EXIST app\build\native\nativeCompile\app.exe (
   build.bat
)

app\build\native\nativeCompile\app.exe
