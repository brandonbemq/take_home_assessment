import { test, expect } from '@playwright/test';
import { login } from '../helpers/loginHelper';

test('login', async ({ page }) => {
    await login(page);
    
    // Checks if user is logged in successfully with correct page URL
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
});

test('shopping cart', async ({ page }) => {
    await login(page);
    
    // Click on the first product to add it to the cart
    await page.click('#add-to-cart-sauce-labs-backpack');

    // Click on the shopping cart icon
    await page.click('.shopping_cart_link');

    // Check if the product is in the cart    
    await expect(page.getByText('Sauce Labs Backpack')).toBeVisible();
});

test('logout', async ({ page }) => {
    await login(page);

    // Click on the menu button
    await page.click('#react-burger-menu-btn');

    // Click on the logout link
    await page.click('#logout_sidebar_link');

    // Check if the user is redirected to the login page
    await expect(page).toHaveURL('https://www.saucedemo.com/');
});
