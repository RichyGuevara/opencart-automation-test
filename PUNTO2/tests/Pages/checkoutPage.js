class CheckoutPage {
  constructor(page) {
    this.page = page;
    this.billingDetailsContinue = page.locator('#button-payment-address');
    this.deliveryDetailsContinue = page.locator('#button-shipping-address');
    this.deliveryMethodContinue = page.locator('#button-shipping-method');
    this.agreeTerms = page.locator('input[name="agree"]');
    this.paymentMethodContinue = page.locator('#button-payment-method');
    this.confirmOrderBtn = page.locator('#button-confirm');

    // Billing form fields
    this.firstName = page.locator('input[name="firstname"]');
    this.lastName = page.locator('input[name="lastname"]');
    this.address1 = page.locator('input[name="address_1"]');
    this.city = page.locator('input[name="city"]');
    this.postcode = page.locator('input[name="postcode"]');
    this.country = page.locator('select[name="country_id"]');
    this.region = page.locator('select[name="zone_id"]');

    this.agreeTerms = page.locator('input[name="agree"]');
  }

  async fillBillingDetails() {
    await this.firstName.fill('Richard');
    await this.lastName.fill('Guevara');
    await this.address1.fill('123 Test Street');
    await this.city.fill('Bogotá');
    await this.postcode.fill('110111');
    await this.country.selectOption({ label: 'Colombia' });
    await this.region.selectOption({ index: 1 });
  }

  async completeCheckout() {
    await this.billingDetailsContinue.click();
    await this.deliveryDetailsContinue.click();
    await this.deliveryMethodContinue.click();
    await this.agreeTerms.check();
    await this.paymentMethodContinue.click();
    await this.confirmOrderBtn.click();
  }
}
module.exports = { CheckoutPage };
