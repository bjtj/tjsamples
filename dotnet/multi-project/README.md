# Example Multi-Project Solution #

<https://corebts.com/blog/how-to-use-dot-net-core-cli-create-multi-project/>

```
dotnet new sln -o myapp

cd myapp

dotnet new console -o hello
dotnet new console -o main

dotnet sln myapp.sln add ./hello/hello.csproj
dotnet sln myapp.sln add ./main/main.csproj
```
