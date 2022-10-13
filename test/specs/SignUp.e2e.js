const page = require("../pageobjects/page.js");
const Page = new page();
const SignUpPage = require("../pageobjects/SignUp.page.js");
const invalidEmail = "123kjkfdsk@";

describe("SignUp page test", () => {
  it("Test sign Up with valid credentials with captcha", async () => {
    await Page.openMainPageAndAcceptCoockies();
    await SignUpPage.openSignUpPage();
    await SignUpPage.enterRegDataAndSubmit();
    // await SignUpPage.verifyErorrMsg("reCAPTCHA validation required") Треба відкоментити перед гітхабом
  });

  it("Test sign Up with incorrect email", async () => {
    await SignUpPage.openSignUpPage();
    await SignUpPage.enterEmail(invalidEmail);
    await SignUpPage.verifyEmailErrorMsg("Please enter a valid email address");
  });
});
