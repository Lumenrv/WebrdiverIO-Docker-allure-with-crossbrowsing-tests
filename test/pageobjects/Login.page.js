const Page = require("./page");
const loginPortal = "https://portal.telnyx.com/#/login/sign-in";

class LoginPage extends Page {

  companyNameBtn(){
    return $('[type="button"]:only-child')
  }
  providersBtn() {
    return $('button[type="button"]:nth-child(3)')
  }

  resendBtn() {
    return $('[href="/#/login/resend-email"]')
  }
  async pressCompanyNameBtn() {
    await this.companyNameBtn().click()
  }
  async resendBtnClick() {
    await this.resendBtn().click()
  }

  async showAllLoginProviders() {
    await this.providersBtn().click()
  }

  async countLogInOptions(quantity) {
    let optionsCount = await $$("//*[contains(text(),'Log in with')]").length
    await expect(optionsCount).toEqual(quantity)
}

  async openLoginPage() {
    await browser.url(loginPortal);
  }

  emailInput() {
    return $('[name="email"]');
  }
  passwordInput() {
    return $('[name="password"]');
  }
  forgotPasswordBtn() {
    return $('[href="/#/login/password-reset"]');
  }
  SubmitBtn() {
    return $('form[aria-label="loginForm"] > button');
  }

  inputName() {
    return $('[aria-label="ssoForm"]>label>span>span')
  }
  errorMessage() {
    return $('[data-testid="login.signin.message"]');
  }
  companyName() {
    return $('[name="short_name"]')
  }
  resendEmailMsg() {
    return $('[data-testid="login.resend.message"]')
  }
  singleSignInBtn() {
    return $('[data-testid="login.signin.tab.sso"]');
  }
  SubmitSignleBtn() {
    return $('div[name="sso"] > form >button');
  }
  emailInputSignle() {
    return $('div[name="sso"] > form >label>div>div>input');
  }
  companyNameErrorMsg() {
    return $('[data-testid="login.signin.message"]>div>div>span')
  }
  async enterEmailSingle(email) {
    await this.emailInputSignle().setValue(await email);
    await this.SubmitSignleBtn().click();
  }
  async enterEmailAndSubmit(email) {
    await this.emailInput().setValue(await email);
    await this.resetPasswordBtn().click();
  }

  async successMsgValidation(errorText) {
    await expect(this.successMessage()).toHaveTextContaining(errorText);
  }

  async inputNameValidation(Text) {
    await expect(this.inputName()).toHaveTextContaining(Text);
  }

  async enterCompanyAndSumbit(Text) {
    await this.companyName().setValue(Text);
    await this.SubmitSignleBtn().click()
  }

  async clickFrgtPassBtn() {
    await this.forgotPasswordBtn().click();
  }
  resetPasswordBtn() {
    return $('div [type="submit"]');
  }
  successMessage() {
    return $('div [type="success"]');
  }

  exisstingUserEmail() {
    return "sokesi7058@lurenwu.com";
  }

  exisstingUserPassword() {
    return "CyppressTestSt1234@";
  }

  async randomEmailGenerator(length = 8) {
    let chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    let str = "";
    for (let i = 0; i < length; i++) {
      str += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return str + "@gmail.com";
  }
  async randomPasswordGenerator(length = 8) {
    let chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    let str = "";
    for (let i = 0; i < length; i++) {
      str += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return str;
  }

  async enterLoginDataAndSubmit(email, password) {
    await this.emailInput().setValue(await email);
    await this.passwordInput().setValue(await password);
    await this.SubmitBtn().click();
    await this.errorMessage().waitForDisplayed({ reverse: false });
  }

  async errorMessageValidation(errorText) {
    await expect(this.errorMessage()).toHaveTextContaining(await errorText);
  }

  async openSingleSignInPage() {
    await this.openLoginPage();
    await this.singleSignInBtn().click();
  }

  async resendEmailMsgValidation(text) {
    await expect(this.resendEmailMsg()).toHaveTextContaining(await text);

  }

  async companyNameErrorMsgValidation(text) {
    await expect(this.companyNameErrorMsg()).toHaveTextContaining(await text);

  }
}

module.exports = new LoginPage();
