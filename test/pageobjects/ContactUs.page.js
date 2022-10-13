const Page = require('./page');
class ContuctUsPage extends Page {

    phoneNumbers() {
        return $$('section>div>ul>li')
    }
    contactUsBtn() {
        return $('li div [href="/contact-us"]')
    }
    supportCenterBtn() {
        return $('[href="https://support.telnyx.com/en/"]')
    }
    async openContactUsPage() {
        await browser.setWindowSize(1920, 1080)
        await this.contactUsBtn().click()
    }

    async checkPhoneNumbers(quantity) {
        let phoneNumbersCount = await this.phoneNumbers().length
        await expect(phoneNumbersCount).toEqual(quantity)
    }

    async clickSupportCenterBtn() {
       await this.supportCenterBtn().click()
    }



}

module.exports = new ContuctUsPage();