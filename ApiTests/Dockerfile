# Use Maven image with JDK 11 installed
FROM maven:3.9.6-eclipse-temurin-11 AS build

WORKDIR /app

COPY pom.xml .
RUN mvn dependency:go-offline

COPY . .
RUN mvn clean verify

FROM maven:3.9.6-eclipse-temurin-11
WORKDIR /app

# Create user and switch
RUN useradd -ms /bin/bash tester
USER tester

COPY --from=build /app /app

CMD ["mvn", "clean", "test"]