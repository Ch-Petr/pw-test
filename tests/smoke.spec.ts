import { test } from "@playwright/test"

test.describe("Příklad Test Setu", () =>{
    test("User login", async ({ page }) => {
        const url = 'https://www.saucedemo.com/'
        await page.goto(url, {waitUntil: 'load', timeout: 10_000})

        const usernameSelector = 'input[data-test="username"]'
        await page.locator(usernameSelector).first().fill("standard_user", {timeout: 5_000, force: true})

        const passwordSelector = 'input[data-test="password"]'
        await page.locator(passwordSelector).first().fill("secret_sauce", {timeout: 5_000, force: true})

        const buttonSelector = 'input[data-test="login-button"]'
        await page.locator(buttonSelector).first().click() //.click({clickCount: 3}) klikne 3x


        await page.waitForLoadState('domcontentloaded', {timeout: 5_000})

    })
})


//spustit: npx playwright test tests/smoke.spec.ts --headed
//report: npx playwright show-report