export default class LeftSideMenuSection {

       private get getDayTimeRangeSelector(){
           return $('id:com.monefy.app.lite:id/day_period_button')}
        private get getAccountSwitcherElement(){
            return $('id:com.monefy.app.lite:id/container')}
        private  chooseAccountTypeInSelector(accountType: string){
            return $(`//android.widget.TextView[@resource-id="com.monefy.app.lite:id/title" and @text="${accountType}"]`);
       }

       public async selectDayTimeRangeInFilter(){
           await this.getDayTimeRangeSelector.click()
       }

        public async selectTypeOfAccount(accountType: string){
            await this.getAccountSwitcherElement.click()
            await this.chooseAccountTypeInSelector(accountType).click()
       }

}
