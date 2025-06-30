import OnboardingPages from '../pageobjects/OnboardingPages';
import MainDashboard from '../pageobjects/MainDashboard';
import BalancePage from '../pageobjects/BalancePage';
import HeaderSection from '../pageobjects/HeaderSection';
import LeftSideMenuSection from '../pageobjects/LeftSideMenuSection';
import { setupOnboarding } from '../helpers/setupOnboarding';


import { expect } from 'chai';


describe('Monefy allows filter users expenses & incomes by different time ranges ', () => {
    let onboardingPages: OnboardingPages;
    const date = new Date();
    const expectedMonth = date.toLocaleString('en-US', { month: 'long' });
    const expectedWeekday = date.toLocaleString('en-US', { weekday: 'long' });
    const expectedDayOfMonth = date.getDate();
    const expectedDay = `${expectedWeekday}, ${expectedDayOfMonth} ${expectedMonth}`;

    const mainDashboard = new MainDashboard();
    const headerSection=new HeaderSection();
    const leftSideMenuSection= new LeftSideMenuSection();


    beforeEach(async () => {
        onboardingPages = new OnboardingPages();
        await setupOnboarding(onboardingPages);
    });

    it('should be able to filter', async () => {
        await mainDashboard.expectTimeRangeTitleToBe(expectedMonth);
        await headerSection.tapLeftMenu();
        await leftSideMenuSection.selectDayTimeRangeInFilter();
        await mainDashboard.expectTimeRangeTitleToBe(expectedDay);
    });
});