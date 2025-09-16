const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../Pages/loginPage');
const fs = require('fs');

test('Login correcto con usuario válido', async ({ page }) => {
  const loginPage = new LoginPage(page);

  const user = JSON.parse(fs.readFileSync('userTemp.json', 'utf-8'));

  await loginPage.goTo();
  await loginPage.login(user);

  await expect(page.locator('h2').first()).toHaveText('My Account');
});

test('Restablecimiento de contraseña', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const user = JSON.parse(fs.readFileSync('userTemp.json', 'utf-8')); 
  await loginPage.goTo();
  await loginPage.resetPassword(user.email);

  await expect(page.locator('.alert-success')).toContainText('An email with a confirmation link has been sent');
});
