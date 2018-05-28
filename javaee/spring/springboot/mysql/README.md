https://spring.io/guides/gs/accessing-data-mysql/

mysql:
create schema db_example;

edit:
src/main/resources/application.properties

$ mvn package && java -jar target/gs-spring-boot-0.1.0.jar


localhost:8090/demo/add?name=tj&email=tj@localhost
localhost:8090/demo/all
