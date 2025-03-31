import { defineConfig, devices } from '@playwright/test';

const TIMEOUTS = {
  TEST_TIMEOUT: 90_000,
  GLOBAL_TIMEOUT: 180_000,
  ACTION_TIMEOUT: 60_000
};

const DEFAULT_VIEWPORT = {
  width: 1920,
  height: 1080
};

export default defineConfig({
  globalTimeout: TIMEOUTS.GLOBAL_TIMEOUT,
  timeout: TIMEOUTS.TEST_TIMEOUT,
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: false,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0, //true z CI spustí 2 a false z CI spustí 0
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 2 : 4,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [
    ['html'],
    ['list'],
  ],

// --------------------------------------------USE----------------------------------------------------

  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://127.0.0.1:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'off',
    testIdAttribute: 'data-testId',
    viewport: DEFAULT_VIEWPORT,
    actionTimeout: TIMEOUTS.ACTION_TIMEOUT,
    navigationTimeout: TIMEOUTS.ACTION_TIMEOUT,
    video: 'off',
    headless: true,
    ignoreHTTPSErrors: true
  },


// -------------------------------------------PROJECTS-------------------------------------------------

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { 
        ...devices['Desktop Chrome'], 
      },
    },
/*
    {
      name: 'firefox',
      use: { 
        ...devices['Desktop Firefox'] },
    },

    {
      name: 'safari',
      use: { 
        ...devices['Desktop Safari'],
         
      },
    },

/*
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },

  /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
