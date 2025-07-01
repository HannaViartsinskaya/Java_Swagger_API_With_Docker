# Java Selenium API Tests

### Approach
- Docker: Portable and reproducible test environment.
- Java + Selenium + Maven: Reliable stack with strong ecosystem support and integration with Allure reporting tool, also fits to your tech stack :)
- Added parametrization for Pet creation test, because it will allow us to check many cases with less code and efforts. As example I covered pet's name field with some edge cases
- POM (Page Object Model) & POJO: Added for easier maintainability and readability of tests by separating page logic and data models, improving code reuse and reducing duplication.

#### Setup
- Install Docker
- Clone this repository

## How to Run Tests In GitHub
- Go to Github actions https://github.com/HannaViartsinskaya/Hanna-Nasi/actions/workflows/pages/pages-build-deployment
- Run action manually
- Report you can find published to GitHub Pages https://hannaviartsinskaya.github.io/Hanna-Nasi/

## How to Run Tests Locally

Build Docker image:
`docker build -t selenium-java-test .`

Run tests inside Docker:
`docker run --rm --user root selenium-java-test mvn test`

