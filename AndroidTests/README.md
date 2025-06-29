# Monefy Android Automation Suite

This project contains automated tests for the Monefy Android application, implemented with Appium and TypeScript, following the Page Object Model (POM) design pattern. 
Based on my experience, the solution will be easy mantain and scale, because:
- we have POM here and we can easily extend tests coverage;
- also I added reporting for visibility of the results

What still I want to improve:
- add Dockerization to isolate depencies and add paralelisation, and also setting up CI/CD would be easier
- add running our tests in CI/CD with Github actions

#### Why Appium with TS
 I selected Appium because:
 - Cross-Platform scalability
 - Variety of languages
 - all types of apps supported
 - also extensive support community

I decided to go with TS, because I want to demonstarte my ability to use TS, due to for the 3rd task i will use Java. Also what I like in this combination is how easy and clean to write asynchronous commands, just like
`await driver.setImplicitTimeout(5000);`
 

#### Project Overview
The automation suite verifies core financial workflows and key UI behaviors:

- Adding incomes and expenses via different flows
- Validating balance and summary calculations
- Filtering transactions by date ranges

These tests check that Monefy reliably tracks user finances and shows accurate data.

### How to run the project
#### Prerequisites
- Node.js (>=16)
- Appium server installed and running
- Android Emulator or real device configured
- Monefy APK installed on the device/emulator

#### Install Dependencies
`npm install`

#### Running the Tests
`npx wdio run wdio.conf.ts`

Or run a specific test file:
`npx wdio run wdio.conf.ts --spec ./tests/add_expenses_incomes.spec.ts`

#### Opening Allure Report
`allure generate ./allure-results -o ./allure-report --clean`
and then open report
`allure open ./allure-report`
Note: Also I attached example of the genrated report under allure-report folder
<img width="1502" alt="Screenshot 2025-06-29 at 00 14 52" src="https://github.com/user-attachments/assets/3dd2aa05-42ed-49be-878b-6b269069cd75" />


### Critical Test Coverage

#### Income and Expense Management (addExpensesAndIncomes.test.ts)
Covered:
- Adding an income transaction (Salary: $200.00)
Adding expenses in two ways:
- From a predefined category
- By selecting category manually
Verifying:
- Correct snackbar notifications
- Expense and income amounts in balance circle
- Updated balance reflecting the transactions


#### Filtering Transactions by Date (timeRangeFiltering.test.ts)
Covered:
- Default time range title displays the current month
- Changing time range filter to "Day"
- Verifying the time range title updates to the correct weekday/date
