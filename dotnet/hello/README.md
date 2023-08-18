# dotnet ubuntu 16.04

<https://www.microsoft.com/net/learn/get-started/linux/ubuntu16-04>

```
$ dotnet new console -o myapp
$ cd myapp
$ dotnet run
```


# Upgrade Assistant #

<https://github.com/dotnet/upgrade-assistant>

Upgrade project's dotnet runtime version

```powreshell
dotnet tool install -g --add-source https://api.nuget.org/v3/index.json --ignore-failed-sources upgrade-assistant
```

e.g.)

```powershell
PS myapp> upgrade-assistant upgrade .
```
