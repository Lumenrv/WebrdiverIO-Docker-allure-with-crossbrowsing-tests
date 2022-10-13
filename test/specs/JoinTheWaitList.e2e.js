// const JoinTheWaitistPage = require("../pageobjects/JoinTheWaitList.page");
const page = require("../pageobjects/page.js");
const Page = new page();

describe("WaitList test", () => {
  it("Test the “Join the waitlist” button", async () => {
    await Page.openMainPageAndAcceptCoockies();
    // await JoinTheWaitistPage.navigateToJoinTheWaitlistPage();
    // await JoinTheWaitistPage.enterDataAndSubmit();
    // await JoinTheWaitistPage.verifyThankYouMsg("Thanks for signing up!");
  });
});
