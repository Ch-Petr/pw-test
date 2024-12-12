//jednoduche testy (pro začátečníka):

import { test, expect } from '@playwright/test';

test('Login example', async ({ page }) => {
    await page.goto('https://example.com/login');
    await page.fill('#username', 'testuser');
    await page.fill('#password', 'password123');
    await page.click('button[type="submit"]');
    await expect(page).toHaveURL('https://example.com/dashboard');
});