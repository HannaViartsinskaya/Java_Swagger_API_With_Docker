export default class BalancePage {
   private get getTransactionRow() {
        return $('id:com.monefy.app.lite:id/transaction_group_header');
    }


     public async tapGetStartedButton() {
        await this.getContinueButton.click();
    }


}
