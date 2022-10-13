const page = require("../pageobjects/page.js");
const ContactUsPage = require("../pageobjects/ContactUs.page");
const Page = new page();

describe("ContactUs page test", () => {
  it("Test if all 12 numbers are displayed on the ContactUs page", async () => {
    await Page.openMainPageAndAcceptCoockies();
    await ContactUsPage.openContactUsPage();
    await ContactUsPage.checkPhoneNumbers(12);
  });

  it("Check is the Support Center link leeds to the correct page", async () => {
    await Page.OpenMainPage();
    await ContactUsPage.openContactUsPage();
    await ContactUsPage.clickSupportCenterBtn();
    await Page.verifyPageTitle("Telnyx Support");
  });
});
