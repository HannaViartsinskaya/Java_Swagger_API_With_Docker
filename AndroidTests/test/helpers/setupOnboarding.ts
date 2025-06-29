export async function setupOnboarding(onboardingPages: OnboardingPages) {
    await onboardingPages.tapGetStartedButton();
    await onboardingPages.tapContinueButtonOnSecondOnboardingPage();
    await onboardingPages.tapContinueButtonOnThirdOnboardingPage();
    await onboardingPages.tapCloseButtonForOnboardingFlow();
    await driver.pause(1000);

}