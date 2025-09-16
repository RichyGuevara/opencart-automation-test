class CartPage {
  constructor(page) {
    this.page = page;
    this.cartLink = page.locator('#cart-total');
    this.viewCartBtn = page.locator('a[href*="checkout/cart"] >> text=View Cart');
    this.quantityInput = (productName) =>
      this.page.locator(`//a[text()="${productName}"]/../..//input[contains(@name,'quantity')]`);
    this.updateBtn = (productName) =>
      this.page.locator(`//a[text()="${productName}"]/../..//button[@data-original-title="Update"]`);
    this.removeBtn = (productName) =>
      this.page.locator(`//a[text()="${productName}"]/../..//button[@data-original-title="Remove"]`);
    this.checkoutBtn = page.locator('a:has-text("Checkout")');
  }

   async openCart() {
    await this.cartLink.click();
    await this.viewCartBtn.waitFor({ state: 'visible' });
    await this.viewCartBtn.click();
  }

  async removeProduct(productName) {
    await this.removeBtn(productName).click();
  }

  async updateQuantity(productName, quantity) {
    await this.quantityInput(productName).fill(quantity.toString());
    await this.updateBtn(productName).click();
  }

  async proceedToCheckout() {
    await this.checkoutBtn.click();
  }
}
module.exports = { CartPage };
