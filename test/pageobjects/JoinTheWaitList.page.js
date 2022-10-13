const Page = require('./page');
class JoinTheWaitlistPage extends Page {

    emailInput(){
        return $('[id="Email"]')
    }
    lastNameInput(){
        return $('[id="LastName"]')
    }
    nameInput(){
        return $('[id="FirstName"]')
    }
    JoinTheWaitlistBtn(){
        return $('[href="/products/storage"]')
    }
    JoinTheWaitlistBtn2(){
        return $('[href="#form"]')
    }
    submitBtn(){
        return $('[type="submit"]')
    }
    additionalInfoInput(){
        return $('[id="Form_Additional_Information__c"]')
    }
    thankYouMessage(){
        return $('//span[contains(text(),"Thanks for")]')
    }
    
    async navigateToJoinTheWaitlistPage() {
       await browser.setWindowSize(1920, 1080)
       await this.JoinTheWaitlistBtn().click();
       await browser.pause(2000)
       await this.JoinTheWaitlistBtn2().click();
       await browser.pause(2000)
    }

    async enterRandomName() {
        await this.nameInput().setValue(this.randomNameGenerator());
    }

    async enterRandomLastName() {
        await this.lastNameInput().setValue(this.randomNameGenerator());
    }

    async enterRandomEmail() {
        await this.emailInput().setValue(this.randomEmailGenerator());
    }

    async fillAddInfo() {
        await this.additionalInfoInput().addValue("Hello every one, it's test message, thanks!");
    }

    async enterDataAndSubmit() {
        await browser.pause(1000)
        await this.enterRandomName()
        await this.enterRandomLastName()
        await this.enterRandomEmail()
        await this.fillAddInfo()
        await this.submitBtn().click();
        await browser.pause(1000)

    }

    async verifyThankYouMsg(text) {
        await    expect(this.thankYouMessage()).toHaveTextContaining(text);

    }


    randomEmailGenerator(length=8) {
        let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

        let str = '';
        for (let i = 0; i < length; i++) {
            str += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return str + '@gmail.com';

    }
    randomPasswordGenerator(length=8) {
        let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

        let str = '';
        for (let i = 0; i < length; i++) {
            str += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return str + '#@#1';

    }
    randomNameGenerator(length=8) {
        let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

        let str = '';
        for (let i = 0; i < length; i++) {
            str += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return str + str;

    }

}

module.exports = new JoinTheWaitlistPage();