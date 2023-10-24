all: build


build:
	dotnet build


run:
	dotnet run


publish:
	dotnet publish --output "publish"


create-service: publish
	sc.exe create ".NET Joke Service" binpath="${CURDIR}/publish/JokeService.exe"


delete-service:
	sc.exe delete ".NET Joke Service"


.PHONY: all build run create-service delete-service
