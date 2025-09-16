const { test, expect } = require('@playwright/test');
const { RegisterPage } = require('../Pages/registerPage');
const fs = require('fs');

test('Registro de usuario nuevo', async ({ page }) => {
  const registerPage = new RegisterPage(page);

  await registerPage.goTo();
  
  const user = {
    firstName: 'Richard',
    lastName: 'Guevara',
    email: `Richard${Math.floor(Math.random() * 10000)}@gmail.com`,
    telephone: '3128269999',
    password: 'Test123'
  };

  await registerPage.register(user);

  await expect(page.locator('#content p').first()).toHaveText('Congratulations! Your new account has been successfully created!');

  fs.writeFileSync('userTemp.json', JSON.stringify(user, null, 2));
});
