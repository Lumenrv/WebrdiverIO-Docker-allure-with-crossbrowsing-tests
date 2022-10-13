const mainUrl = 'https://telnyx.com/';
const productPage = "https://telnyx.com/products";

module.exports = class Page {


    async enterEmailAndClickSubmit(email) {
        let emailInput = $('[type="email"]')
        let submitBtn = $('[type="submit"]')
        await emailInput.setValue(await email);
        await submitBtn.click();
        await browser.pause(2000)
    }

    async AcceptCoockies() {
        let CookiesButton = $('#__next footer+div div div button')
        await CookiesButton.click()
    }
    async OpenMainPage() {
        await browser.url(mainUrl);
    }
    async openMainPageAndAcceptCoockies(){
         await browser.url(mainUrl);
         await this.AcceptCoockies()

    };

    get ProductList() {
        return $('h2');
    };

    async OpenProductPage() {
        await browser.url(productPage)
        await browser.pause(1000)
    }

    async countProducts(quantity) {
        let productCount = await $$('h2').length
        await expect(productCount).toEqual(quantity)
    }

    async verifyPageTitle(title) {
    await browser.pause(2000)
    await expect(await browser).toHaveTitle(title)
}
    async verifyPageUrl(url) {
    await browser.pause(2000)
    await expect(browser).toHaveUrl(url)
    }
footerElements() {
    return $$('footer div> ul > li')
}

compareBtn() {
    return $('p [target="_blank"]')
}

async countFooterElements(quantity) {
    let footerElementsCount = await this.footerElements().length
    await expect(footerElementsCount).toEqual(quantity)
}

async verifyFooterElementsAreDisplayed() {
    await expect(this.footerElements()).toBeDisplayed()
}

async scrollAndClick(button) {
    await button.scrollIntoView()
    await button.click()
}

async openUnexistingPage(randomText) {
    await browser.url('https://telnyx.com/' + randomText)
    await expect(browser).toHaveUrl('https://telnyx.com/' + randomText)
}

async verifyh1OnPage(text) {
    let h1 = await $('<h1>')
    await expect(h1).toHaveText(text)
}

takeMeHomeBtn() {
return $('//*[contains(text(),"Take me home")]')
}
}