@echo off

rem Batch file call sub-batch file to pass n paramenters and return without use of file
rem -----------------------------------------------------------------------------------
rem <https://stackoverflow.com/a/11486159>

setlocal

echo ------------------------------------------------------------
echo  `call :sum 1 2`
echo ------------------------------------------------------------
call :sum 1 2
echo result is %errorlevel%

echo ------------------------------------------------------------
echo  `call :getmessage message`
echo ------------------------------------------------------------
call :getmessage message
echo Message from :getmessage is '%message%'

echo ------------------------------------------------------------
echo  `call :foo 1 2 3 4`
echo ------------------------------------------------------------
call :foo 1 2 3 4

echo ------------------------------------------------------------
echo  `call :baz`
echo ------------------------------------------------------------
call :baz

echo ------------------------------------------------------------
echo  `goto baz`
echo ------------------------------------------------------------
goto baz

echo ------------------------------------------------------------
echo  `goto run (will not be called)`
echo ------------------------------------------------------------
goto run

rem -----------------------------------

:sum
setlocal
set /a "sum=%1 + %2"
exit /b %sum%

:getmessage
set msg=HELLO
set "%1=%msg%"
exit /b

:foo
shift
echo value: %0
shift
echo value: %0
shift
if not [%0] == [] echo %0
shift
if not [%0] == [] echo %0
shift
if not [%0] == [] echo %0
exit /b 0

:baz
echo BAZ!
goto :eof

:run
echo BYE~
