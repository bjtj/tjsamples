@echo off
setlocal

rem https://lallouslab.net/2016/12/21/batchography-switch-case/

echo Switch/case in Batch script

set /P N=Enter switch case number:

:switch-case-example

:: Call and mask out invalid call targets
goto :switch-case-N-%N% 2>nul || (
:: Default case
echo Something else
)
goto :switch-case-end

:switch-case-N-1
echo One
goto :switch-case-end

:switch-case-N-2
echo Two
goto :switch-case-end

:switch-case-N-3
echo Three
goto :switch-case-end

:switch-case-end
echo After Switch/case

