export default class TransferPage {
   private get getTransferTo() {
        return $('id:com.monefy.app.lite:id/spinnerAccountTo');
   }

   private  chooseAccountTypeInSelectorForTransfer(accountType: string){
        return $(`//android.widget.TextView[@resource-id="com.monefy.app.lite:id/title" and @text="${accountType}"]`);
   }
  private getDigitButton(digit: string) {
        return $(`id:com.monefy.app.lite:id/buttonKeyboard${digit}`);
    }
  private get transferAmountInput(){
        return $('id:com.monefy.app.lite:id/amount_text')}

  private get getAddTransferButton() {
        return $('id:com.monefy.app.lite:id/keyboard_action_button');}

  public async selectTypeOfAccountForTransferTo( typeOfAccountForTransferTo: string) {
        await this.getTransferTo.click();
        await this.chooseAccountTypeInSelectorForTransfer(typeOfAccountForTransferTo).click();
    }

 public async addTransfersAmount(amount: string) {
     await this.transferAmountInput.click();
     for (const digit of amount) {
            const button = await this.getDigitButton(digit);
            await button.click();
        }

        await this.getAddTransferButton.click();
    }

}
