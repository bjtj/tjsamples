all:

run-hello:
	dotnet run --project ./hello/hello.csproj

build-hello:
	dotnet publish ./hello/hello.csproj -o ./build -c Release

run-main: build-hello
	dotnet run --project ./main/main.csproj

.PHONY: all run-hello build-hello run-main
