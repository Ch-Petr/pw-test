//Domácí úkol -------------------------------------------------------------------------------------------

import { Page, test, expect } from "@playwright/test"

export async function scrshot(label: string, page: Page) {
    const buffer = await page.screenshot({ type: "jpeg", animations: "disabled" });
    await test.info().attach(label, { body: buffer, contentType: "image/jpeg"});
}


test.describe("Domácí úkol", () => {
    test("Navigace po strance", { tag: '@Úkol' },async ({ page }) => {
        await test.step("Otevřít stránku", async () => {
            const url = 'https://www.principal.tech/cz/'
            await page.goto(url, { waitUntil: 'load', timeout: 10_000 })
            await scrshot('Homepage', page)
        })
        await test.step("Kliknout na Souhlasím", async () => {
            const souhlasimButton = 'button[id="c-p-bn"]'
            await page.locator(souhlasimButton).first().click({ timeout: 5_000, force: true })
        })
        await test.step("Kliknout na Domů", async () => {
            const homeButton = '[class*="item-101"]'
            await page.locator(homeButton).first().click({ timeout: 5_000, force: true })
            await scrshot('Domu', page)
        })
        await test.step("Kliknout na Portfolio", async () => {
            const portfolioButton = '[class*="item-170"]'
            await page.locator(portfolioButton).first().click({ timeout: 5_000, force: true })
        })
        await test.step("Kliknout na Portfolio -> Produkty", async () => {
            const produktyButton = '[class*="item-199"]'
            await page.locator(produktyButton).first().click({ timeout: 5_000, force: true })
            await scrshot('Produkty', page)
        })
        await test.step("Kliknout na Portfolio", async () => {
            const portfolioButton = '[class*="item-170"]'
            await page.locator(portfolioButton).first().click({ timeout: 5_000, force: true })
        })
        await test.step("Kliknout na Portfolio -> Služby", async () => {
            const sluzbyButton = '[class*="item-196"]'
            await page.locator(sluzbyButton).first().click({ timeout: 5_000, force: true })
            await scrshot('Služby', page)
        })
        await test.step("Kliknout na Portfolio", async () => {
            const portfolioButton = '[class*="item-170"]'
            await page.locator(portfolioButton).first().click({ timeout: 5_000, force: true })
        })
        await test.step("Kliknout na Portfolio -> Řešení", async () => {
            const reseniButton = '[class*="item-198"]'
            await page.locator(reseniButton).first().click({ timeout: 5_000, force: true })
            await scrshot('Řešení', page)
        })
        await test.step("Kliknout na O nás", async () => {
            const aboutUsButton = '[class*="item-168"]'
            await page.locator(aboutUsButton).first().click({ timeout: 5_000, force: true })
            await scrshot('O nás', page)
        })
        await test.step("Kliknout na Blog", async () => {
            const blogButton = '[class*="item-166"]'
            await page.locator(blogButton).first().click({ timeout: 5_000, force: true })
            await scrshot('Blog', page)
        })
        await test.step("Kliknout na Pro koho děláme", async () => {
            const proKohoDelameButton = '[class*="item-289"]'
            await page.locator(proKohoDelameButton).first().click({ timeout: 5_000, force: true })
        })
        await test.step("Kliknout na Pro koho děláme -> Finance", async () => {
            const financeButton = '[class*="item-290"]'
            await page.locator(financeButton).first().click({ timeout: 5_000, force: true })
            await scrshot('Finance', page)
            await page.evaluate(() => { window.scrollTo(0, 0);})
        })
        await test.step("Kliknout na Pro koho děláme", async () => {
            const proKohoDelameButton = '[class*="item-289"]'
            await page.locator(proKohoDelameButton).first().click({ timeout: 5_000, force: true })
        })
        await test.step("Kliknout na Pro koho děláme -> Utility", async () => {
            const utilityButton = '[class*="item-291"]'
            await page.locator(utilityButton).first().click({ timeout: 5_000, force: true })
            await scrshot('Utility', page)
            await page.evaluate(() => { window.scrollTo(0, 0);})
        })
        await test.step("Kliknout na Pro koho děláme", async () => {
            const proKohoDelameButton = '[class*="item-289"]'
            await page.locator(proKohoDelameButton).first().click({ timeout: 5_000, force: true })
        })
        await test.step("Kliknout na Pro koho děláme -> Průmysl", async () => {
            const prumyslButton = '[class*="item-292"]'
            await page.locator(prumyslButton).first().click({ timeout: 5_000, force: true })
            await scrshot('Průmysl', page)
            await page.evaluate(() => { window.scrollTo(0, 0);})
        })
        await test.step("Kliknout na Pro koho děláme", async () => {
            const proKohoDelameButton = '[class*="item-289"]'
            await page.locator(proKohoDelameButton).first().click({ timeout: 5_000, force: true })
        })
        await test.step("Kliknout na Pro koho děláme -> Správa", async () => {
            const spravaButton = '[class*="item-293"]'
            await page.locator(spravaButton).first().click({ timeout: 5_000, force: true })
            await scrshot('Správa', page)
            await page.evaluate(() => { window.scrollTo(0, 0);})
        })
        await test.step("Kliknout na Pro koho děláme", async () => {
            const proKohoDelameButton = '[class*="item-289"]'
            await page.locator(proKohoDelameButton).first().click({ timeout: 5_000, force: true })
        })
        await test.step("Kliknout na Pro koho děláme -> Telekomunikace", async () => {
            const telekomunikaceButton = '[class*="item-294"]'
            await page.locator(telekomunikaceButton).first().click({ timeout: 5_000, force: true })
            await scrshot('Telekomunikace', page)
            await page.evaluate(() => { window.scrollTo(0, 0);})
        })
        await test.step("Kliknout na Kariéra", async () => {
            const karieraButton = '[class*="item-169"]'
            await page.locator(karieraButton).first().click({ timeout: 5_000, force: true })
            await scrshot('Kariéra', page)
        })
      })
    })

//spustit: npx playwright test tests/ukol.spec.ts --headed

 