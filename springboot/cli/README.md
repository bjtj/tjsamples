# Spring Boot Cloud CLI #

<https://docs.spring.io/spring-cloud-cli/docs/3.0.3/reference/html/>

## 3.2.6. Windows Scoop Installation ##

<https://docs.spring.io/spring-boot/docs/current-SNAPSHOT/reference/html/getting-started.html#getting-started.installing.cli.scoop>

```
> scoop bucket add extras
> scoop install springboot
```

[scoop](https://scoop.sh/)

Scoop installs `spring` to `~/scoop/apps/springboot/current/bin`.


```groovy
@RestController
class ThisWillActuallyRun {

    @RequestMapping("/")
    String home() {
        "Hello World!"
    }

}
```

```shell
$ spring run app.groovy
```
