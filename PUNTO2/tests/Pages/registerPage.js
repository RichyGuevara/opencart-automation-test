class RegisterPage {
  constructor(page) {
    this.page = page;
    this.firstName = page.locator('#input-firstname');
    this.lastName = page.locator('#input-lastname');
    this.email = page.locator('#input-email');
    this.telephone = page.locator('#input-telephone');
    this.password = page.locator('#input-password');
    this.confirmPassword = page.locator('#input-confirm');
    this.privacyPolicy = page.locator('input[name="agree"]');
    this.continueBtn = page.locator('input[value="Continue"]');
  }

  async goTo() {
    await this.page.goto('https://opencart.abstracta.us/index.php?route=account/register');
  }

  async register(user) {
    await this.firstName.fill(user.firstName);
    await this.lastName.fill(user.lastName);
    await this.email.fill(user.email);
    await this.telephone.fill(user.telephone);
    await this.password.fill(user.password);
    await this.confirmPassword.fill(user.password);
    await this.privacyPolicy.check();
    await this.continueBtn.click();
  }
}

module.exports = { RegisterPage };