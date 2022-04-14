# about_Execution_Policies #

<https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_execution_policies?view=powershell-7.2>

```powershell
Get-ExecutionPolicy
```

```powershell
Get-ExecutionPolicy -List

        Scope ExecutionPolicy
        ----- ---------------
MachinePolicy       Undefined
   UserPolicy       Undefined
      Process       Undefined
  CurrentUser       Undefined
 LocalMachine       Undefined
```

```powershell
Get-ExecutionPolicy -Scope CurrentUser
```


# How to create and run a PowerShell script file on Windows 10 #

<https://www.windowscentral.com/how-create-and-run-your-first-powershell-script-file-windows-10>

powershell 을 관리자 권한으로 실행 후 execution policy (실행 정책) 변경해야 스크립트 실행 가능

```powershell
Set-ExecutionPolicy RemoteSigned
```

권한 해제 방법

```powershell
Set-ExecutionPolicy Restricted
```


> On Windows 10, PowerShell includes four execution policies, including:
>
> * **Restricted** — Stops any script from running.
> * **RemoteSigned** — Allows scripts created on the device, but scripts created on another computer won't run unless they include a trusted publisher's signature.
> * **AllSigned** — All the scripts will run, but only if a trusted publisher has signed them.
> * **Unrestricted** — Runs any script without any restrictions.


# Powershell - Scripting #

<https://www.tutorialspoint.com/powershell/powershell_scripting.htm>

> Windows PowerShell is a **command-line** shell and **scripting language** designed especially for system administration.

> Windows PowerShell commands, called **cmdlets**
