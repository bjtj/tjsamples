@echo off
setlocal

echo ------------------------------------------------------------

for /l %%x in (1, 1, 10) do echo %%x

echo ------------------------------------------------------------

for %%x in (a b) do echo %%x

echo ------------------------------------------------------------

set list=q w e r
for %%x in (%list%) do echo %%x

echo ------------------------------------------------------------

for %%x in (%list%) do call :print %%x
goto end

:print
echo - ITEM: %1
goto :eof

:end
echo BYE~
