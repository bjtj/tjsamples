@echo off
setlocal

rem https://stackoverflow.com/a/1194991

echo %DATE%
echo %TIME%

echo %time:~0,2%
echo %time:~3,2%
echo %time:~6,2%
echo %time:~9,2%

echo %date% %time%

