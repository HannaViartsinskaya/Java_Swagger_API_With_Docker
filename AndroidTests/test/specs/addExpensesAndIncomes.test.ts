import OnboardingPages from '../pageobjects/OnboardingPages';
import MainDashboard from '../pageobjects/MainDashboard';
import BalancePage from '../pageobjects/BalancePage';
import HeaderSection from '../pageobjects/HeaderSection';
import { setupOnboarding } from '../helpers/setupOnboarding';


import { expect } from 'chai';


describe('Monefy allows to add expenses in various ways and incomes; all values calculated correctly on dashboard ', () => {
    const currency="$";
    const expectedIncome='200.00';

    let onboardingPages: OnboardingPages;
    const mainDashboard = new MainDashboard();


it('should be able to add income', async () => {
        const incomeAmount='200';
        const typeOfIncome='Salary';
        const expectedExpenses='0.00';

        onboardingPages = new OnboardingPages();
        await setupOnboarding(onboardingPages);
        await mainDashboard.tapIncomeButton();
        await mainDashboard.addIncome(incomeAmount, typeOfIncome);
        await mainDashboard.expectMessageInSnackbarToBe(typeOfIncome+': '+currency + incomeAmount+'.00 added');
        await mainDashboard.incomeAmountInCircleToBe(currency+expectedIncome);
        await mainDashboard.expenseAmountInCircleToBe(currency+expectedExpenses);
        await mainDashboard.expectBalanceToBe('Balance '+ currency+expectedIncome);
    });

it('should be able to add expenses in various ways and cancel them', async () => {
        const amountOfFirstExpense='5';
        const expectedAmountOfFirstExpense='5.00';
        const categoryOfFirstExpense='Food';
        const amountOfSecondExpense='21';
        const expectedAmountOfSecondExpense='21.00';
        const categoryOfSecondExpense='Gifts';
        const expectedFinalBalance='179.00'


        await mainDashboard.clickFirstExpenseImageButton();
        await mainDashboard.addExpenseWithPredifiendCategory(amountOfFirstExpense);
        await mainDashboard.incomeAmountInCircleToBe(currency+expectedIncome);
        await mainDashboard.expenseAmountInCircleToBe(currency+expectedAmountOfFirstExpense);
        await mainDashboard.expectMessageInSnackbarToBe(categoryOfFirstExpense+': '+currency+expectedAmountOfFirstExpense+' added');
        await mainDashboard.tapCloseOnSnackbar();

        await mainDashboard.tapExpenseButton();
        await mainDashboard.addExpense(amountOfSecondExpense, categoryOfSecondExpense);
        await mainDashboard.expectMessageInSnackbarToBe(categoryOfSecondExpense +': '+currency+expectedAmountOfSecondExpense+' added');
        await mainDashboard.expectBalanceToBe('Balance '+currency+expectedFinalBalance);
        await mainDashboard.incomeAmountInCircleToBe(currency+expectedIncome);
        await mainDashboard.expenseAmountInCircleToBe(currency+expectedAmountOfSecondExpense);
    });
});

