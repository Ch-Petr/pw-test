import { test } from '@playwright/test';

// Blok se spustí před všemi testy pouze jednou
test.beforeAll(async ({ page }) => {
    // Script...
});

// Blok se spustí před každým testem
test.beforeEach(async ({ page }) => {
    // Script...
});

// Blok s testy
test.describe('test', () => {
    // Test 1
    test('test', async ({ page }) => {
        // Script...

    });

    // Test 2
    test('test', async ({ page }) => {
        // Script...

        // Blok s krokami testu
        test.step('step', async () => {
            // Script...
        });
    });

    // Test 3
    test('test', async ({ page }) => {
        // Script...

        // Blok s krokami testu
        test.step('step', async () => {
            // Script...
        });

        // Blok s krokami testu
        test.step('step', async () => {
            // Script...

            // Blok s krokami testu
            test.step('step', async () => {
                // Script...

                // Případně další kroky jestli jsou potřeba - lze vnořovat
            });
        });
    });
});

// Blok se spustí po každém testu
test.afterEach(async ({ page }) => {
    // Script...
});

// Blok se spustí po všech testech pouze jednou
test.afterAll(async ({ page }) => {
    // Script...
});