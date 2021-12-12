@echo off
setlocal

if [%1] == [] goto usage

rem set IMAGE=swift:4.2
rem set IMAGE=swift:5.0
set IMAGE=swift:5.5

call :run %1
exit

:run
setlocal
set CWD=%CD%
set FILENAME=%1
set COMMAND="swift -version; echo "---------------------------"; swift %FILENAME%"
docker run --rm -t -v %CWD%:/workspace -w /workspace %IMAGE% sh -c %COMMAND%
goto :eof

:usage
echo [USAGE] %~0 "<swift-file-path>"
exit 1
