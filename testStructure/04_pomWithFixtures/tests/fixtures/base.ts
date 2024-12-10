import { test as base } from '@playwright/test';
import { ExamplePageObjectWithFixtures } from '../../src/ExamplePomWithFixtures'
export { expect } from '@playwright/test';

// Define the test objects
export type TestObjects = {
    site: ExamplePageObjectWithFixtures
}

export const test = base.extend<TestObjects>({
    site: async ({}, use) => {
        // Inicialize the page object model
        await use(
            new ExamplePageObjectWithFixtures()
        )
    }
})

test.beforeAll(async ({ site }) => {
    console.log(`Executing Playwright tests with the following parameters: ${site}`)
})

test.beforeEach(async ({}, testInfo) => {
    console.log(`Running test: "${testInfo.title}" | Project: "${testInfo.project.name}"`)
})

test.afterEach(async ({}, testInfo) => {
    console.log(`Running test: "${testInfo.title}" | Project: "${testInfo.project.name}" | Status: "${testInfo.status}"`)
})

test.afterAll(async ({ site }) => {
    console.log(`Playwright tests executed with the following parameters: ${site}`)
})