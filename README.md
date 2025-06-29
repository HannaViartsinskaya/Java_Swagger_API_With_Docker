# Java Selenium API Tests

#### Setup
- Install Docker
- Clone this repository

## How to Run Tests In GitHub
- Go to Github actions https://github.com/HannaViartsinskaya/Java_Swagger_API_With_Docker/actions/workflows/api-tests.yml
- Run action manually
- Report you can find published to GitHub Pages https://hannaviartsinskaya.github.io/Java_Swagger_API_With_Docker/

## How to Run Tests Locally

Build Docker image:
`docker build -t selenium-java-test .`

Run tests inside Docker:
`docker run --rm --user root selenium-java-test mvn test`


### Approach
Docker: Portable and reproducible test environment.
Java + Selenium + Maven: Reliable stack with strong ecosystem support and integration with Allure reporting tool, also fits to your tech stack :)

