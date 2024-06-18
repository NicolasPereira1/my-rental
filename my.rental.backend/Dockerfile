FROM openjdk:17 as prod
EXPOSE 80
WORKDIR /tmp
COPY ./target/my.rental.backend-0.0.1-SNAPSHOT.jar .
CMD ["java", "-jar", "my.rental.backend-0.0.1-SNAPSHOT.jar"]