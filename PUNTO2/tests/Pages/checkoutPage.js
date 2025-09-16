class CheckoutPage {
  constructor(page) {
    this.page = page;
    this.billingDetailsContinue = page.locator('#button-payment-address');
    this.deliveryDetailsContinue = page.locator('#button-shipping-address');
    this.deliveryMethodContinue = page.locator('#button-shipping-method');
    this.agreeTerms = page.locator('input[name="agree"]');
    this.paymentMethodContinue = page.locator('#button-payment-method');
    this.confirmOrderBtn = page.locator('#button-confirm');
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
