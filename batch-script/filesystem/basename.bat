@echo off

rem REF: https://stackoverflow.com/a/14355389/5676460

call :basename "/a/b/c"
call :basename "c:/a/b/c.exe"

rem OUTPUT:
rem 
rem c
rem c

:BASENAME
for /F "delims=" %%i in ("%~1") do @echo %%~ni
exit /B 0
