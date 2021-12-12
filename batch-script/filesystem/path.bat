@echo off
setlocal

rem https://stackoverflow.com/a/5034119

echo %0
rem "path.bat "

echo %~0
rem path.bat 

echo %~f0
rem c:\tjsamples\batch-script\filesystem\path.bat

echo %~dp0
rem c:\tjsamples\batch-script\filesystem\

for %%d in (%~dp0..) do set ParentDirectory=%%~fd
echo %ParentDirectory%
rem c:\tjsamples\batch-script

echo %~d0
rem c:

echo %~p0
rem \tjsamples\batch-script\filesystem\

echo %~n0
rem path

echo %~x0
rem .bat

echo %~n0.txt
rem path.txt
