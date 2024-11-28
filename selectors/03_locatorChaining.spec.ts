import { test } from '@playwright/test';

test("Řetězení selektorů", async ({ page }) => {
    const locatorChain = 'div.container >> button.submit'
    await page.locator(locatorChain).click();
})