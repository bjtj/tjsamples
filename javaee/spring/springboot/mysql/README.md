# Accessing data with MySQL #

* https://spring.io/guides/gs/accessing-data-mysql/

Mysql

```
create schema db_example;
```

Edit `src/main/resources/application.properties`

```
server.port=8090

spring.jpa.hibernate.ddl-auto=create
spring.datasource.url=jdbc:mysql://localhost:3306/db_example
spring.datasource.username=root
spring.datasource.password=pass
```

Build & Run

```
$ mvn package && java -jar target/gs-mysql-data-0.1.0.jar
```

Test

* `localhost:8090/demo/add?name=tj&email=tj@localhost`
* `localhost:8090/demo/all`
