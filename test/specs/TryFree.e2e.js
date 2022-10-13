const page = require("../pageobjects/page.js");
const Page = new page();
const SignUpPage = require("../pageobjects/SignUp.page.js");

describe("Try free test", () => {
  it("Test the “Try free” banner", async () => {
    const randomEmail = SignUpPage.randomEmailGenerator();
    await Page.openMainPageAndAcceptCoockies();
    await Page.enterEmailAndClickSubmit(randomEmail);
    await SignUpPage.compareEmail(randomEmail);
  });
});
