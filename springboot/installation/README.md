# Installing Spring Boot #

<https://docs.spring.io/spring-boot/installing.html>

Spring Boot can be used with “classic” Java development tools or installed as a command line tool. Either way, you need Java SDK v17 or higher. Before you begin, you should check your current Java installation by using the following command:

``` shell
$ java -version
```

## Installing the Spring Boot CLI ##

### Installation with SDKMAN! ###

``` shell
$ sdk install springboot
$ spring --version
Spring CLI v3.4.3
```

### Windows Scoop Installation ###

``` powershell
$ scoop bucket add extras
$ scoop install springboot
```

Scoop installs `spring` to `~/scoop/apps/springboot/current/bin`.


## Developing Your First Spring Boot Application ##

<https://docs.spring.io/spring-boot/tutorial/first-application/index.html>


## Using the CLI ##

<https://docs.spring.io/spring-boot/cli/using-the-cli.html>

``` shell
$ spring
```

``` shell
$ spring help init
```

``` shell
$ spring version
```

### Initialize a New Project ###

``` shell
$ spring init --dependencies=web,data-jpa my-project
```

``` shell
$ spring init --list
```
