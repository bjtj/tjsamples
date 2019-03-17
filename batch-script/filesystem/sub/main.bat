@echo off

rem https://stackoverflow.com/a/3827582

set mypath=%~dp0
echo %mypath%
echo %mypath:~0,-1%

