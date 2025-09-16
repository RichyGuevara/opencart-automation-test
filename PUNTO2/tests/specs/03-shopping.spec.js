const { test, expect } = require('@playwright/test');
const { ProductPage } = require('../Pages/productPage');
const { CartPage } = require('../Pages/cartPage');
const { LoginPage } = require('../Pages/loginPage');
const { CheckoutPage } = require('../Pages/checkoutPage');
const fs = require('fs');

test('Flujo de agregar y gestionar productos en el carrito', async ({ page }) => {
  const productPage = new ProductPage(page);
  const cartPage = new CartPage(page);
  const loginPage = new LoginPage(page);
  const checkoutPage = new CheckoutPage(page);


  // Ir a laptops y seleccionar MacBook Pro
  const user = JSON.parse(fs.readFileSync('userTemp.json', 'utf-8'));
  await loginPage.goTo();
  await loginPage.login(user);
  await expect(page.locator('h2').first()).toHaveText('My Account');
  await productPage.goToLaptops();
  await productPage.selectProduct('MacBook Pro');
  await productPage.addToCart();
  await expect(page.locator('.alert-success')).toContainText('Success: You have added MacBook Pro to your shopping cart!');

  // Buscar Samsung Galaxy Tab y agregar al carrito
  await productPage.searchProduct('Samsung Galaxy Tab');
  await productPage.selectProduct('Samsung Galaxy Tab 10.1');
  await productPage.addToCart();
  await expect(page.locator('.alert-success')).toContainText('Success: You have added Samsung Galaxy Tab 10.1 to your shopping cart!');

  // Abrir carrito y eliminar MacBook Pro
  await cartPage.openCart();
  await cartPage.removeProduct('MacBook Pro');

  // Aumentar cantidad de tablets a 2
  await cartPage.updateQuantity('Samsung Galaxy Tab 10.1', 2);

  // Validar que se actualizó
  await expect(cartPage.quantityInput('Samsung Galaxy Tab 10.1')).toHaveValue('2');

  // Proceder al checkout
  await cartPage.proceedToCheckout();

  // Completar checkout
  await checkoutPage.completeCheckout();

  // Validar confirmación
  await expect(page.locator('h1')).toContainText('Your order has been placed!');
});
