export default class MainDashboard {
    private get getExpenseButton() {
        return $('id:com.monefy.app.lite:id/expense_button');
    }

    private getDigitButton(digit: string) {
        return $(`id=com.monefy.app.lite:id/buttonKeyboard${digit}`);
    }

    private get getChooseCategoryButton() {
        return $('id:com.monefy.app.lite:id/keyboard_action_button');
    }

    private getCategory(name: string) {
        return $(`//android.widget.LinearLayout[android.widget.TextView[@resource-id="com.monefy.app.lite:id/textCategoryName" and @text="${name}"]]/android.widget.ImageView`);
    }
    private get getTimeRangeTitle() {
            return $('id:com.monefy.app.lite:id/pts_main')
                .$(`//android.widget.TextView`);
    }
    private get getBalanceAmountElement() {
        return $('id:com.monefy.app.lite:id/balance_amount');
    }

    public get firstExpenseImageButton() {
        return $("//android.widget.FrameLayout[@resource-id='com.monefy.app.lite:id/piegraph']/android.widget.ImageView[1]");
      }

    private get getBalanceElement(){
        return $('id:com.monefy.app.lite:id/balance_container');
        }

    private get getSnackbarText() {
        return $('id:com.monefy.app.lite:id/snackbar_text');
    }

    private get getCloseSnackbarButton() {
        return $('id:com.monefy.app.lite:id/snackbar_action');
    }

    private get getIncomeButton (){
        return $('id:com.monefy.app.lite:id/income_button')}

     private get getAmountFromBalance (){
            return $('id:com.monefy.app.lite:id/textViewWholeAmount')}

     private get getIncomeAmountCircle (){
            return $('id:com.monefy.app.lite:id/income_amount_text')}

     private get getExpenseAmountCircle (){
            return $('id:com.monefy.app.lite:id/expense_amount_text')}

    public async tapExpenseButton() {
        await this.getExpenseButton.click();
    }


    public async addExpense(amount: string, name: string) {
        for (const digit of amount) {
            const button = await this.getDigitButton(digit);
            await button.click();
        }

        await this.getChooseCategoryButton.click();
        await this.getCategory(name).click();
    }

    public async addIncome(amount: string, name: string) {
        for (const digit of amount) {
            const button = await this.getDigitButton(digit);
            await button.click();
        }

        await this.getChooseCategoryButton.click();
        await this.getCategory(name).click();
    }
    public async expectBalanceToBe(expectedText: string) {
        await this.getBalanceAmountElement.waitForExist();
        await expect(this.getBalanceAmountElement).toHaveText(expectedText);
    }
    public async expectMessageInSnackbarToBe(expectedText: string) {
        await this.getSnackbarText.waitForExist();
        await expect(this.getSnackbarText).toHaveText(expectedText);
    }

    public async tapCloseOnSnackbar() {
            await this.getCloseSnackbarButton.click();
        }

    public async tapBalanceBottomElement(){
        await this.getBalanceElement.waitForDisplayed({ timeout: 5000 });
        await this.getBalanceElement.waitForEnabled({ timeout: 5000 });
        await this.getBalanceElement.click();
        }

    public async tapIncomeButton(){
        await this.getIncomeButton.click();
}

    public async checkAmount(expected: string) {
        const text = await this.getAmountFromBalance.getText();
        expect(text).toEqual(expected);
}
public async clickFirstExpenseImageButton() {
    await (await this.firstExpenseImageButton).click();
  }
 public async addExpenseWithPredifiendCategory(amount: string) {
        for (const digit of amount) {
            const button = await this.getDigitButton(digit);
            await button.click();
        }
        await this.getChooseCategoryButton.click();
    }
  public async incomeAmountInCircleToBe(expected: string) {
        const amount = await this.getIncomeAmountCircle.getText();
        expect(amount).toEqual(expected);
}
 public async expenseAmountInCircleToBe(expected: string) {
        const amount = await this.getExpenseAmountCircle.getText();
        expect(amount).toEqual(expected);
}

public async expectTimeRangeTitleToBe(expected: string) {
        await expect(this.getTimeRangeTitle).toHaveText(expected);
    }
}
