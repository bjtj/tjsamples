FROM openjdk:8-alpine

COPY target/uberjar/swag.jar /swag/app.jar

EXPOSE 3000

CMD ["java", "-jar", "/swag/app.jar"]
