import { Page } from '@playwright/test';

export async function login(page: Page){
    await page.goto('https://www.saucedemo.com/');

    // Fill in the username and password fields
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');

    // Click the login button
    await page.click('#login-button');
}