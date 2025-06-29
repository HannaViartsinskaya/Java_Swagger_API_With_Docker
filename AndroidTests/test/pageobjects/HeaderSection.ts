export default class HeaderSection {
   private get getLeftMenu() {
           return $('//android.widget.ImageButton[@content-desc="Open navigation"]');
       }
       private get getDayTimeRangeSelector(){
           return $('id:com.monefy.app.lite:id/day_period_button')}

        public async tapLeftMenu() {
           await this.getLeftMenu.click();
       }
       public async selectDayTimeRangeInFilter(){
           await this.getDayTimeRangeSelector.click()
           }
}
