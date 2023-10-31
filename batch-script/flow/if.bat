@echo off
setlocal

if [%1]==[] (
echo "ERR) No argument"
exit /b 1
)

rem echo %ERRORLEVEL%

echo %1

if not "%1"=="x" (
   echo "%1 is not x"
)
