# Worker services in .NET #

<https://learn.microsoft.com/en-us/dotnet/core/extensions/workers?pivots=dotnet-7-0>



## Create a Queue Service ##

<https://learn.microsoft.com/en-us/dotnet/core/extensions/queue-service?pivots=dotnet-7-0>

## Use scoped services within a `BackgroundService` ##

<https://learn.microsoft.com/en-us/dotnet/core/extensions/scoped-service?pivots=dotnet-7-0>

## Create Windows Service using `BackgroundService` ##

<https://learn.microsoft.com/en-us/dotnet/core/extensions/windows-service?pivots=dotnet-7-0>

``` shell
dotnet new worker --name <Project.Name>
```

### Install NuGet package ###

``` shell
dotnet add package Microsoft.Extensions.Hosting.WindowsServices
```

.csproj

``` xml
<ItemGroup>
  <PackageReference Include="Microsoft.Extensions.Hosting" Version="7.0.1" />
  <PackageReference Include="Microsoft.Extensions.Hosting.WindowsServices" Version="7.0.1" />
</ItemGroup>
```


## Create a Windows Service installer ##

https://learn.microsoft.com/en-us/dotnet/core/extensions/windows-service-with-installer?tabs=ext

- Microsoft Visual Studio Installer Projects 2022 - [link](https://marketplace.visualstudio.com/items?itemName=VisualStudioClient.MicrosoftVisualStudio2022InstallerProjects)
- CliWrap - [link](https://www.nuget.org/packages/CliWrap)

``` shell
dotnet add App.WindowsService.csproj package CliWrap
```


## Implement the `IHostedService` interface ##

<https://learn.microsoft.com/en-us/dotnet/core/extensions/windows-service-with-installer?tabs=wix>

## Deploy a Worker Service to Azure ##

<https://learn.microsoft.com/en-us/dotnet/core/extensions/cloud-service?pivots=visualstudio>



