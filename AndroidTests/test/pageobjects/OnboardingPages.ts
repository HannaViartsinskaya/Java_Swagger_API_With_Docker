export default class OnboardingPages {
   private get getContinueButton() {
        return $('id:com.monefy.app.lite:id/buttonContinue');
    }

    private get getButtonOnSecondOnboardingPage() {
        return $('id:com.monefy.app.lite:id/buttonContinue');
    }
    private get getButtonOnThirdOnboardingPage() {
        return $('id:com.monefy.app.lite:id/buttonContinue');
    }
    private get getCloseIconForLastOnboardingScreen() {
        return $('id:com.monefy.app.lite:id/buttonClose');
    }

     public async tapGetStartedButton() {
        await this.getContinueButton.click();
    }
     public async tapContinueButtonOnSecondOnboardingPage() {
        await this.getButtonOnSecondOnboardingPage.click();
    }
     public async tapContinueButtonOnThirdOnboardingPage() {
        await this.getButtonOnSecondOnboardingPage.click();
    }
    public async tapCloseButtonForOnboardingFlow() {
        await this.getCloseIconForLastOnboardingScreen.click();
    }
}
