import { test } from '@playwright/test';

test("Příklady lokátorů", async ({ page }) => {
    const cssSelector = 'button[class="btn-primary"]'
    const cssLocator = page.locator(cssSelector)
    await cssLocator.click()

    const xpathSelector = '//button[contains(@class, "btn-primary")]'
    const xpathLocator = page.locator(xpathSelector)
    await xpathLocator.click()

    const textSelector = 'Login'
    const textLocator = page.getByText(textSelector)
    await textLocator.click()

    const roleSelector = 'button'
    const roleLocator = page.getByRole(roleSelector, { name: "button" }) // ARIA atributy
    await roleLocator.click()

    const labelSelector = 'Button'
    const labelLocator = page.getByLabel(labelSelector)
    await labelLocator.click()

    const placeholderSelector = 'input[placeholder="Search"]'
    const placeholderLocator = page.getByPlaceholder(placeholderSelector)
    await placeholderLocator.click()

    const altSelector = 'img[alt="Company Logo"]'
    const altLocator = page.getByAltText(altSelector)
    await altLocator.click()

    const titleSelector = 'button[title="Submit Form"]'
    const titleLocator = page.getByTitle(titleSelector)
    await titleLocator.click()

    const testIdSelector = 'statická-hodnota'
    const testIdLocator = page.getByTestId(testIdSelector)
    await testIdLocator.click()
})