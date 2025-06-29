import OnboardingPages from '../pageobjects/OnboardingPages';
import MainDashboard from '../pageobjects/MainDashboard';
import BalancePage from '../pageobjects/BalancePage';
import HeaderSection from '../pageobjects/HeaderSection';
import { setupOnboarding } from '../helpers/setupOnboarding';


import { expect } from 'chai';


describe('Monefy allows to add expenses in various ways and incomes; all values calculated correctly on dashboard ', () => {
    let onboardingPages: OnboardingPages;
    const mainDashboard = new MainDashboard();
    const balancePage=new BalancePage();


it('should be able to add income', async () => {
        onboardingPages = new OnboardingPages();
        await setupOnboarding(onboardingPages);
        await mainDashboard.tapIncomeButton()
        await mainDashboard.addIncome("200", "Salary")
        await mainDashboard.expectMessageInSnackbarToBe('Salary: $200.00 added')
        await mainDashboard.incomeAmountInCircleToBe('$200.00')
        await mainDashboard.expenseAmountInCircleToBe('$0.00')
        await driver.pause(1000);
    });

it('should be able to add expenses in various ways and cancel them', async () => {
        await mainDashboard.clickFirstExpenseImageButton()
        await mainDashboard.addExpenseWithPredifiendCategory('5')
        await mainDashboard.incomeAmountInCircleToBe('$200.00')
        await mainDashboard.expenseAmountInCircleToBe('$5.00')
        await mainDashboard.expectMessageInSnackbarToBe('Food: $5.00 added')
        await mainDashboard.tapCloseOnSnackbar()
        await driver.pause(1000);

        await mainDashboard.tapExpenseButton()
        await mainDashboard.addExpense("21", "Gifts")
        await mainDashboard.expectMessageInSnackbarToBe('Gifts: $21.00 added')
        await mainDashboard.expectBalanceToBe('Balance $179.00');
        await mainDashboard.incomeAmountInCircleToBe('$200.00')
        await mainDashboard.expenseAmountInCircleToBe('$21.00')
    });
});

