# How to test #

Open `x64 Native Tools Command Prompt for VS 2022`

``` shell
nmake
```


``` shell
powershell ./main.ps1

> type stdout.txt
Hello World

> type stderr.txt
Hello world in STDERR
```



## Example 5: Start PowerShell as an administrator ##

<https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.management/start-process?view=powershell-7.3>

``` shell
Start-Process -FilePath "powershell" -Verb RunAs
```


