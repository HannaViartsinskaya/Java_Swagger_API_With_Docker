# Monefy Android Automation Suite

This project contains automated tests for the Monefy Android application, implemented with Appium and TypeScript, following the Page Object Model (POM) design pattern. 
Based on my experience, the solution will be easy maintain and scale, because:
- we have POM here and we can easily extend tests coverage;
- also I added reporting for visibility of the results

What still I want to improve:
- add Dockerization to isolate dependencies and add parallelisation, and also setting up CI/CD would be easier
- add running our tests in CI/CD with Github actions
- add parametrization to tests and check different values

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
- Sending transfer from Cash to Payment card

Selected tests check that Monefy reliably tracks user finances and shows accurate data. I found these flows more important in the application, due to the main purpose of the app to help user analyze and track his incomes and expenses.  For the future I would extend checks that balance was updated succesfully on balance page also, and expenses & incomes are displaying correctly in Balance


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
` npx wdio run wdio.conf.ts --spec ./test/specs/moneyTransfer.test.ts`

#### Opening Allure Report
`allure generate ./allure-results -o ./allure-report --clean`
and then open report
`allure open ./allure-report`
Note: Also I attached example of the genrated report under allure-report folder
<img width="1511" alt="Screenshot 2025-06-30 at 18 11 16" src="https://github.com/user-attachments/assets/cf275692-f7c6-496a-b2d7-16a4f997b7e9" />


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


#### Transferring money from one account to another (moneyTransfer.test.ts)
Covered:
- By default selected 'All accounts' of the user
- User can change filtering of the dashboard to 'Cash' or 'Payment card'
- User can send money from 'Cash' to 'Payment card', and balance will be adjusted correctly in Cash dashboard & Payment card
