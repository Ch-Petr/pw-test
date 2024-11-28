import { test } from '@playwright/test';

test("Dynamické prvky na stránce", async ({ page }) => {
    const dynamicElement = '#dynamic-element'
    // Čeká, dokud element odpovídající selektoru není přítomen v DOM
    await page.waitForSelector(dynamicElement)
})