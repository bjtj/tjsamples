@echo off

rem echo %1
rem echo %2

if [%1]==[] echo "No Argument"

for %%x in (%*) do echo %%x


