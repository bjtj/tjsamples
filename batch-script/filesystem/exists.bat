@echo off

if [%1] == [] goto usage

rem How to check if a file exists from inside a batch file [duplicate]
rem - <https://stackoverflow.com/a/4340395>
if exist %1 (echo EXIST) else (
   echo NOT EXIST
   exit 1
)

rem How to test if a file is a directory in a batch script?
rem - <https://stackoverflow.com/a/1466528>
if exist %1%\* (echo DIRECTORY) else (echo FILE)
exit 0

:usage
echo "[USAGE] %0 <path>"
