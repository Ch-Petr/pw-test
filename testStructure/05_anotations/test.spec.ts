import { test, expect } from '@playwright/test';

test.only('Only', async ({ page }) => {
    await page.goto('https://example.com/login');
    await page.fill('#username', 'testuser');
    await page.fill('#password', 'password123');    
    await page.click('button[type="submit"]');
    await expect(page).toHaveURL('https://example.com/dashboard');
});

test.skip('Skip', async ({ page }) => {
    // Tento test nebude spuštěn
});

test.fail('Fail', async ({ page }) => {
    await page.goto('https://example.com/login');
    await expect(page).toHaveURL('https://example.com/login');
});

test.fixme('Fix me', async ({ page }) => {
    await page.goto('https://example.com/recover');
    await expect(page.locator('input#email')).toBeVisible();
});

test('Slow test on conditions', async ({ page, browserName }) => {
    test.slow(browserName === 'webkit');
    await page.goto('https://example.com/large-dataset');
    await page.click('text=Process');
    await expect(page).toHaveTitle('Processing complete');
});

test('Skip test based on condition', async ({ page, isMobile }) => {
    test.skip(!isMobile, 'Still working on it');
    await page.goto('https://example.com/large-dataset');
    await page.click('text=Process');
    await expect(page).toHaveTitle('Processing complete');
});

test('Tags', { tag: ['@smoke', '@regress'] }, async ({ page }) => {
    await page.goto('https://example.com/login');
    await page.fill('#username', 'testuser');
    await page.fill('#password', 'password123');    
    await page.click('button[type="submit"]');
    await expect(page).toHaveURL('https://example.com/dashboard');
});

test('Annotations', { annotation: { type: 'Xray', description: 'link' }}, async ({ page }) => {
    await page.goto('https://example.com/login');
    await page.fill('#username', 'testuser');
    await page.fill('#password', 'password123');    
    await page.click('button[type="submit"]');
    await expect(page).toHaveURL('https://example.com/dashboard');
});