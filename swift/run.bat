@echo off

if [%1] == [] (
   echo [ERR] no filename
   exit 1
)

docker run --rm -t -v %~dp0:/workspace -w /workspace swift:5.5 swift %1%
