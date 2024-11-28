import { test } from '@playwright/test';

test("Výpis všech načtených lokátorů na stránce", async ({ page }) => {
    // Výpis všech lokátorů na stránce
    const frames = page.frames();
    console.log(`Počet iframe na stránce: ${frames.length}`);
    frames.forEach(frame =>
        console.log(`URL iframe: ${frame.url()}`,
        console.log(`Název iframe: ${frame.name()}`),
    ));
})

test("Možnosti vyhledání iframe na stránce", async ({ page }) => {
    // Vyhledání iframe podle selektoru
    const frameWithLocator = page.frame('iframe[data-testid="iframeTestId"]');
    await frameWithLocator?.locator('input#username').fill('testUser');

    // Vyhledání iframe podle názvu
    const frameWithName = page.frame({ name: 'iframeName' });
    await frameWithName?.locator('button#submit').click();

    // Vyhledání iframe podle URL
    const frameWithUrl = page.frame({ url: 'https://example.com/iframe-url' });
    await frameWithUrl?.locator('input#password').fill('testPassword');
})

test("Problematika nestovaných iframes", async ({ page }) => {
    const parentFrame = page.frame({ name: 'parentIframe' });
    const childFrame = parentFrame?.childFrames()[0]; // První podřízený iframe
    await childFrame?.locator('button#confirm').click();
})

test("Iterace přes všechny iframe při hledání tlačítka s id 'start'", async ({ page }) => {
    const frames = page.frames();
    for (const frame of frames) {
      if (frame.locator('button#start')) {
        await frame.locator('button#start').click();
        break;
      }
}})