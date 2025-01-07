import { expect, test } from "@playwright/test"

test.describe("Příklad Test Suite", () => {
    test("User login", async ({ page }) => {
        await test.step("Otevřít stránku", async () => {
            const url = 'https://www.saucedemo.com'
            await page.goto(url, { waitUntil: 'load', timeout: 10_000 })
        })

        await test.step("Vyplnit Username", async () => {
            const usernameLocator = page.locator('input[data-test="username"]').first()
            await expect (usernameLocator).toHaveText('standard_user')
            await expect(usernameLocator).toBeAttached({ timeout: 5_000})
            await usernameLocator.fill("standard_user", { timeout: 5_000 })
        })

        await test.step("Vyplnit Password", async () => {
            const  passwordLocator= 'input[id="password"]'
            await expect (page.locator(passwordLocator).first()).toBeVisible({ timeout: 5_000 })
            await page.locator(passwordLocator).first().fill("secret_sauce", { timeout: 5_000, force: true })
        })

        await test.step("Kliknout na Login button", async () => {
            const loginButton = 'input[name="login-button"]'
            await page.locator(loginButton).first().click({ timeout: 5_000, force: true })
        })

        const loginButton = 'input[name="login-button"]'
        await page.locator(loginButton).first().click({ timeout: 5_000, force: true })

        await page.waitForLoadState('domcontentloaded', { timeout: 5_000 })

        await page.waitForURL(/inventory.html/, { timeout: 5_000, waitUntil: 'domcontentloaded' })
    })
})



//spustit: npx playwright test tests/smoke.spec.ts --headed
//report: npx playwright show-report