import OnboardingPages from '../pageobjects/OnboardingPages';
import MainDashboard from '../pageobjects/MainDashboard';
import BalancePage from '../pageobjects/BalancePage';
import HeaderSection from '../pageobjects/HeaderSection';
import LeftSideMenuSection from '../pageobjects/LeftSideMenuSection';
import TransferPage from '../pageobjects/TransferPage';
import { setupOnboarding } from '../helpers/setupOnboarding';


import { expect } from 'chai';


describe('Monefy allows user sending money from one type of account to another and balance updated successfully, user can switch between accounts ', () => {
    const expectedPaymentTypeInitially='All accounts';
    const newPaymentType='Payment card';
    const paymentTypeTransferredFrom='Cash';
    const transferredAmount='11';
    const expectedIncomeInChartForTransferReceiver='$11.00';

    let onboardingPages: OnboardingPages;
    const mainDashboard = new MainDashboard();
    const headerSection=new HeaderSection();
    const leftSideMenuSection= new LeftSideMenuSection();
    const transferPage= new TransferPage();

    beforeEach(async () => {
        onboardingPages = new OnboardingPages();
        await setupOnboarding(onboardingPages);
    });

    it('should be able to send money transfer from cash to card and balance will be updated on both sides', async () => {
        await headerSection.checkCorrectAccountTypePresentInHeader(expectedPaymentTypeInitially);
        await headerSection.tapLeftMenu();
        await leftSideMenuSection.selectTypeOfAccount(newPaymentType);
        await headerSection.checkCorrectAccountTypePresentInHeader(newPaymentType);
        await headerSection.tapTransferMenuIcon();
        await transferPage.selectTypeOfAccountForTransferTo(newPaymentType);
        await transferPage.addTransfersAmount(transferredAmount);
        await headerSection.checkCorrectAccountTypePresentInHeader(newPaymentType);
        await mainDashboard.incomeAmountInCircleToBe(expectedIncomeInChartForTransferReceiver);
        await mainDashboard.expectBalanceToBe('Balance '+ expectedIncomeInChartForTransferReceiver);

// checking that money was correctly subtracted from Sender account
        await headerSection.tapLeftMenu();
        await leftSideMenuSection.selectTypeOfAccount(paymentTypeTransferredFrom);
        await headerSection.checkCorrectAccountTypePresentInHeader(paymentTypeTransferredFrom);
        await mainDashboard.expenseAmountInCircleToBe(expectedIncomeInChartForTransferReceiver);
        await mainDashboard.expectBalanceToBe('Balance -'+ expectedIncomeInChartForTransferReceiver);
    });
});