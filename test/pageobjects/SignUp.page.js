const Page = require('./page');
const signUpPortal = "https://telnyx.com/sign-up";
const InvalidEmail = "123kjkfdsk@";

class SignUpPage extends Page {

    async compareEmail(email) {
        let emailInputField = await $('[id="email"]')
        await expect(emailInputField).toHaveValue(await email);
    }

    invalidEmail(){
        return InvalidEmail
    }
    async openSignUpPage(){
        await browser.url(signUpPortal);
        await browser.refresh();
        await browser.pause(1000)
    }
    emailInput(){
        return $('[id="email"]')
        //.first()
    }
    passwordInput(){
        return $('[id="password"]')
    }
    nameInput(){
        return $('[id="full_name"]')
    }
    checkBox(){
        return $('[fill="white"]')
        //first()
    }
    errorMessage(){
        return $('[aria-label="signup-form_error"]')
    }
    createAccountBtn(){
        return $('[type="submit"]')
        //.first()
    }
    emeailErrorMessage(){
        return $('[id="email_error"]')
    }
    
    async enterEmail(email) {
        await this.emailInput().setValue( await email);
    }


    async verifyEmailErrorMsg(messasge) {
     await browser.pause(1000)
     await this.nameInput().click();
     await browser.pause(1000)
     await expect(this.emeailErrorMessage()).toHaveTextContaining(await messasge);

    }
    
    async enterRandomName() {
        await this.nameInput().setValue( await this.randomNameGenerator());
    }

    async enterRandomEmail() {
        await this.emailInput().setValue( await this.randomEmailGenerator());
    }

    async enterRandomPassword() {
        await this.passwordInput().setValue( await this.randomPasswordGenerator(12));
    }

    async checkBoxAndCreateAccount() {
        await this.checkBox().click()
        await this.createAccountBtn().click()
    }


    async verifyErorrMsg(text) {
        await expect(this.errorMessage()).toHaveTextContaining( await text);

    }

    async enterRegDataAndSubmit() {
        await this.enterRandomName()
        await this.enterRandomEmail()
        await this.enterRandomPassword()
        await this.checkBoxAndCreateAccount()
        await browser.pause(2000)
    }

    async randomEmailGenerator(length=8) {
        let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

        let str = '';
        for (let i = 0; i < length; i++) {
            str += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return str + '@gmail.com';

    }
    async randomPasswordGenerator(length=8) {
        let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

        let str = '';
        for (let i = 0; i < length; i++) {
            str += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return str + '#@#1';

    }
    async randomNameGenerator(length=8) {
        let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

        let str = '';
        for (let i = 0; i < length; i++) {
            str += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return str + str;

    }

}

module.exports = new SignUpPage();