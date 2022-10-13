const page = require("../pageobjects/page.js");
const Page = new page();

describe("Products page test", () => {
  it("Test if all 30 products are displayed on the product page", async () => {
    await Page.openMainPageAndAcceptCoockies();
    await Page.OpenProductPage();
    await Page.countProducts(30);
  });
});
