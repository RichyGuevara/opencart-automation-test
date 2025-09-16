class LoginPage {
  constructor(page) {
    this.page = page;
    this.email = page.locator('#input-email');
    this.password = page.locator('#input-password');
    this.loginBtn = page.locator('input[value="Login"]');
    this.forgotPasswordLink = page.locator('#content a:has-text("Forgotten Password")');
    this.forgotEmail = page.locator('#input-email');
    this.continueBtn = page.locator('input[value="Continue"]');
  }

  async goTo() {
    await this.page.goto('https://opencart.abstracta.us/index.php?route=account/login');
  }

  async login(user) {
    await this.email.fill(user.email);
    await this.password.fill(user.password);
    await this.loginBtn.click();
  }

  async resetPassword(email) {
    await this.forgotPasswordLink.click();
    await this.forgotEmail.fill(email);
    await this.continueBtn.click();
  }
}
module.exports = { LoginPage };
