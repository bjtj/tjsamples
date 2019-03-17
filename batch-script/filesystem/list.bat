@echo off
setlocal

echo [Current working directory]
echo %CD%

rem https://stackoverflow.com/a/138538

echo [RECURSIVE]
for /r %%i in (*) do echo %%i

echo [LOCAL]
for %%i in (*) do echo %%i

rem https://stackoverflow.com/a/3432895

echo [FILES]
for /f %%f in ('dir /b %cd%') do echo %%f

echo [FILES -- fullpath]
for /f %%f in ('dir /b %cd%') do echo %%~ff

