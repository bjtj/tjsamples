all: build


build:
	dotnet build


run:
	dotnet run


create-service: build
	sc.exe create ".NET Joke Service" binpath="${CURDIR}/bin/Debug/net7.0/win-x64/JokeService.exe"


delete-service:
	sc.exe delete ".NET Joke Service"


.PHONY: all build run create-service delete-service
