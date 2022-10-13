const page = require("../pageobjects/page.js");
const Page = new page();

describe("Main page test", () => {
  it("Test footer displays all elements", async () => {
    await Page.openMainPageAndAcceptCoockies();
    await Page.countFooterElements(33);
    await Page.verifyFooterElementsAreDisplayed();
  });

  it("Test if agregattor site still has the Telenyx title", async () => {
    await Page.OpenMainPage();
    await Page.scrollAndClick(Page.compareBtn());
    await Page.verifyPageTitle(
      "Telnyx | Communication APIs for Seamless Connectivity"
    );
  });

  it("Test if unexisting page send 404 error", async () => {
    await Page.OpenMainPage();
    await Page.openUnexistingPage("random_text");
    await Page.verifyh1OnPage("Oops! This page doesn’t exist");
  });

  it("Test if 404 page has a button to back to the site", async () => {
    await Page.OpenMainPage();
    await Page.openUnexistingPage("random_text");
    await Page.verifyh1OnPage("Oops! This page doesn’t exist");
    await Page.scrollAndClick(await Page.takeMeHomeBtn());
    await Page.verifyPageUrl("https://telnyx.com/");
  });
});
