@echo off
setlocal

set msg=hello
set msg=                                             %msg%
echo --------------------------------------------------
echo %msg:~-100%
echo --------------------------------------------------

rem Output:
rem ```
rem --------------------------------------------------
rem                                              hello
rem --------------------------------------------------
rem ```
