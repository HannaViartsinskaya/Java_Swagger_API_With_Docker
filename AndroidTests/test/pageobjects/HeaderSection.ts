export default class HeaderSection {
   private get getLeftMenu() {
           return $('//android.widget.ImageButton[@content-desc="Open navigation"]');
       }

       private getTypeOfAccountLabel(accountType: string) {
           return $(`//*[@resource-id='com.monefy.app.lite:id/toolbar']//android.widget.TextView[@text="${accountType}"]`);
       }
       private get getTransferMenuIcon(){
           return $('id:com.monefy.app.lite:id/transfer_menu_item')}

        public async tapLeftMenu() {
           await this.getLeftMenu.click();
       }

       public async checkCorrectAccountTypePresentInHeader(accountType: string): Promise<void> {
           const exists = await this.getTypeOfAccountLabel(accountType).isExisting();
           expect(exists).toBe(true);
       }

        public async tapTransferMenuIcon(){
            await this.getTransferMenuIcon.click();
            }

}
