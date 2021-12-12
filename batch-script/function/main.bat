@echo off

echo - call :foo 1 2 3 4
call :foo 1 2 3 4

echo - call :baz
call :baz

echo - goto baz
goto baz

echo - goto run (will not be called)
goto run

rem -----------------------------------

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
