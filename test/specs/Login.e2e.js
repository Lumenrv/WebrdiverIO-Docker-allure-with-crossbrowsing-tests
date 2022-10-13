const page = require("../pageobjects/page.js");
const Page = new page();
const LoginPage = require("../pageobjects/Login.page.js")
// if (process.env.NODE_ENV) {
//   require("dotenv").config({ path: `${__dirname}/.env.${process.env.NODE_ENV}`, });
// } else {
//   require("dotenv").config();
// }

describe("Login page test", () => {
  it("Test login with valid credentials for blocked account", async () => {
    // await console.log(`${__dirname}/.env.${process.env.NODE_ENV}`)
    // await console.log(process.env)
    // await console.log(process.env.TEST_VAR)
    await Page.openMainPageAndAcceptCoockies();
    await LoginPage.openLoginPage();
    await LoginPage.enterLoginDataAndSubmit('sokesi7058@lurenwu.com','CyppressTestSt1234@');
    await LoginPage.errorMessageValidation("Your account has been blocked.");
    'CyppressTestSt1234@'
  });


  it("Test login with an invalid password", async () => {
    await LoginPage.openLoginPage();
    await LoginPage.enterLoginDataAndSubmit(
      await LoginPage.exisstingUserEmail(),
      await LoginPage.randomPasswordGenerator()
    );
    await LoginPage.errorMessageValidation(
      "That email and password combination is not valid"
    );
  });

  it("Test login with an invalid email", async () => {
    await LoginPage.openLoginPage();
    await LoginPage.enterLoginDataAndSubmit(
      await LoginPage.randomEmailGenerator(),
      await LoginPage.exisstingUserPassword()
    );
    await LoginPage.errorMessageValidation(
      "That email and password combination is not valid"
    );
  });

  it("Test forgot password feature with non-registered email", async () => {
    await LoginPage.openLoginPage();
    await LoginPage.clickFrgtPassBtn();
    await LoginPage.enterEmailAndSubmit(await LoginPage.randomEmailGenerator());
    await LoginPage.successMsgValidation(
      "We have accepted your password reset request"
    );
  });

  it("Test if all login options availble", async () => {
    await LoginPage.openLoginPage();
    await LoginPage.showAllLoginProviders();
    await LoginPage.countLogInOptions(5)
});

  it("Test Signe Sign-On option with invalid credential", async () => {
    await LoginPage.openSingleSignInPage();
    await LoginPage.enterEmailSingle("sokesi7058@lurenwu.com");
    await LoginPage.errorMessageValidation(
      "The requested resource or URL could not be found"
    );
  });

  it("Test login option with comapny name with invalid company name", async () => {
    await LoginPage.openSingleSignInPage();
    await LoginPage.pressCompanyNameBtn();
    await LoginPage.enterCompanyAndSumbit("putin LOH");
    await LoginPage.companyNameErrorMsgValidation("The requested resource or URL could not be found.")
  
  });

it("Test if resend option works correctly", async () => {
  await LoginPage.openLoginPage();
  await LoginPage.resendBtnClick();
  await LoginPage.enterEmailAndSubmit(await LoginPage.randomEmailGenerator());
  await LoginPage.resendEmailMsgValidation('If your email address exists in our database')
});

it("Test if option to login with company name changes the input name", async () => {
  await LoginPage.openSingleSignInPage();
  await LoginPage.pressCompanyNameBtn();
  await LoginPage.inputNameValidation("Business Name");

});

});