class ProductPage {
  constructor(page) {
    this.page = page;
    this.searchInput = page.locator('input[name="search"]');
    this.searchBtn = page.locator('button.btn.btn-default.btn-lg');
    this.addToCartBtn = page.locator('#button-cart');
    this.laptopsMenu = this.page.getByRole('link', { name: 'Laptops & Notebooks' });
    this.showAllLaptops = this.page.getByRole('link', { name: 'Show All Laptops & Notebooks' });
  }

  async goToLaptops() {
    await this.page.goto('/');
    await this.laptopsMenu.hover();
    await this.showAllLaptops.click();
  }

  async searchProduct(productName) {
    await this.page.goto('/');
    await this.searchInput.fill(productName);
    await this.searchBtn.click();
  }

  async selectProduct(productName) {
    await this.page.locator(`a:has-text("${productName}")`).click();
  }

  async addToCart() {
    await this.addToCartBtn.click();
  }
}
module.exports = { ProductPage };
