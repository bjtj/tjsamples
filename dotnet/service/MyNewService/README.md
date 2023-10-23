# Tutorial: Create a Windows service app #

<https://learn.microsoft.com/en-us/dotnet/framework/windows-services/walkthrough-creating-a-windows-service-application-in-the-component-designer>


## Install the service ##

1. Open Developer Command Prompt for Visual Studio with administrative credentials.

```shell
installutil MyNewService.exe
```

## Clean up resources ##

```shell
installutil.exe /u MyNewService.exe
```
