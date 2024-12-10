// Základní příklad importu funkce "multiply"
import { multiply } from './07_modules-export';

const result = multiply(2, 3);
console.log(result);  // Výstup: 6


// Příklad importu funkce "login" pro Playwright, včetně importu modulu pro Playwright
import { login } from './07_modules-export';
import { test } from '@playwright/test';

test('should login successfully', async ({ page }) => {
  await page.goto('https://example.com/login');
  await login(page, 'testUser', 'testPass');
});