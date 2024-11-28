import { test } from '@playwright/test';

// Import selektorů ze souboru
import { storeSelectors } from './06_selectorLibrary';

test("Import selektorů z TS souboru a použití", async ({ page }) => {
    await page.locator(storeSelectors.FIELD_USERNAME).fill('admin');
    await page.locator(storeSelectors.FIELD_PASSWORD).fill('password123');
    await page.locator(storeSelectors.BUTTON_LOGIN).click();
})