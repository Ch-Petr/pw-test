import { test, expect } from '@playwright/test';

// CELÝ POSKLÁDANÝ TEST
test.describe('Funkcionalita přihlášení', () => {
    // NASTAVENÍ - SETUP
    test.beforeEach(async ({ page }) => {
        await page.goto('https://example.com/login');
    });

    test('úspěšné přihlášení s platnými údaji', async ({ page }) => {
        // AKCE
        await page.fill('#username', 'testuser');
        await page.fill('#password', 'securepassword');
        await page.click('#loginButton');
        
        // OVĚŘENÍ AKCE
        const welcomeMessage = await page.textContent('#welcome');
        expect(welcomeMessage).toBe('Vítejte, testuser!');
    });

    // UKONČENÍ / TEARDOWN
    test.afterEach(async ({ page }) => {
        await page.close();
    });
});

// Další příklad atomického testu
test.describe('Přihlášení', () => {
    test('úspěšné přihlášení', async ({ page }) => {
        await page.fill('#username', 'testuser');
        await page.fill('#password', 'securepassword');
        await page.click('#loginButton');
        
        const welcomeMessage = await page.textContent('#welcome');
        expect(welcomeMessage).toBe('Vítejte, testuser!');
    });

    test('neúspěšné přihlášení s neplatnými údaji', async ({ page }) => {
        await page.fill('#username', 'testuser');
        await page.fill('#password', 'wrongpassword');
        await page.click('#loginButton');
        
        const errorMessage = await page.textContent('.error');
        expect(errorMessage).toBe('Neplatné přihlašovací údaje.');
    });
});