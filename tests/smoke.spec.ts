import { expect, test } from "@playwright/test"
import dotenv from 'dotenv'

dotenv.config({override: true});
const username = process.env.UNAME;
const password = process.env.PWORD;

if (!username || !password) {
    throw new Error ('Username/Password Error')
}

test.describe("Příklad Test Suite", () => {
    test("User login", { tag: '@smoke' },async ({ page }) => {
        await test.step("Otevřít stránku", async () => {
            const url = 'https://www.saucedemo.com'
            await page.goto(url, { waitUntil: 'load', timeout: 10_000 })
        })

        await test.step("Vyplnit Username", async () => {
            const usernameLocator = page.locator('input[data-test="username"]').first()
            await expect(usernameLocator).toBeAttached({ timeout: 5_000})
            await usernameLocator.fill("standard_user", { timeout: 5_000 })
            await expect (usernameLocator).toHaveText("standard_user")
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

//Domácí úkol -------------------------------------------------------------------------------------------

test.describe("Domácí úkol", () => {
    test("User login", { tag: '@Úkol' },async ({ page }) => {
        await test.step("Otevřít stránku", async () => {
            const url = 'https://www.principal.tech/cz/'
            await page.goto(url, { waitUntil: 'load', timeout: 10_000 })
        })
        await test.step("Kliknout na Domů", async () => {
            const homeButton = 'input[class="item-101"]'
            await page.locator(homeButton).first().click({ timeout: 5_000, force: true })
        })
        await test.step("Kliknout na Portfolio -> Produkty", async () => {
            const produktyButton = 'input[class="item-199"]'
            await page.locator(produktyButton).first().click({ timeout: 5_000, force: true })
        })
        await test.step("Kliknout na Portfolio -> Služby", async () => {
            const sluzbyButton = 'input[class="item-196"]'
            await page.locator(sluzbyButton).first().click({ timeout: 5_000, force: true })
        })
        await test.step("Kliknout na Portfolio -> Řešení", async () => {
            const reseniButton = 'input[class="item-198"]'
            await page.locator(reseniButton).first().click({ timeout: 5_000, force: true })
        })
        await test.step("Kliknout na O nás", async () => {
            const aboutUsButton = 'input[class="item-168"]'
            await page.locator(aboutUsButton).first().click({ timeout: 5_000, force: true })
        })
        await test.step("Kliknout na Blog", async () => {
            const blogButton = 'input[class="item-166"]'
            await page.locator(blogButton).first().click({ timeout: 5_000, force: true })
        })
        await test.step("Kliknout na Pro koho děláme -> Finance", async () => {
            const financeButton = 'input[class="item-290"]'
            await page.locator(financeButton).first().click({ timeout: 5_000, force: true })
            await page.evaluate(() => { window.scrollTo(0, 0);})
        })
        await test.step("Kliknout na Pro koho děláme -> Utility", async () => {
            const utilityButton = 'input[class="item-291"]'
            await page.locator(utilityButton).first().click({ timeout: 5_000, force: true })
            await page.evaluate(() => { window.scrollTo(0, 0);})
        })
        await test.step("Kliknout na Pro koho děláme -> Průmysl", async () => {
            const prumyslButton = 'input[class="item-292"]'
            await page.locator(prumyslButton).first().click({ timeout: 5_000, force: true })
            await page.evaluate(() => { window.scrollTo(0, 0);})
        })
        await test.step("Kliknout na Pro koho děláme -> Správa", async () => {
            const spravaButton = 'input[class="item-293"]'
            await page.locator(spravaButton).first().click({ timeout: 5_000, force: true })
            await page.evaluate(() => { window.scrollTo(0, 0);})
        })
        await test.step("Kliknout na Pro koho děláme -> Telekomunikace", async () => {
            const telekomunikaceButton = 'input[class="item-294"]'
            await page.locator(telekomunikaceButton).first().click({ timeout: 5_000, force: true })
            
        })
        await test.step("Kliknout na Kariéra", async () => {
            const karieraButton = 'input[class="item-169"]'
            await page.locator(karieraButton).first().click({ timeout: 5_000, force: true })
        })
    })
})


//spustit: npx playwright test tests/smoke.spec.ts --headed
//report: npx playwright show-report