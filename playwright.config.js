// playwright.config.js
// This is the default configuration file for Playwright projects.
// It allows you to define test directory, timeouts, reporter, and more.

/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
  testDir: './tests', // Directory where test files are located
  timeout: 30000, // Maximum time one test can run for
  retries: 0, // Number of retries on failure
  reporter: [['list'], ['html', { outputFolder: 'test-results/html-report' }]],
  use: {
    headless: true, // Default: run tests in headless mode
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    video: 'retain-on-failure',
    screenshot: 'only-on-failure',
  },
  projects: [
    {
      name: 'Headless Chromium',
      use: { browserName: 'chromium', headless: true },
    },
    {
      name: 'chromium',
      use: {
        browserName: 'chromium',
        channel: 'chrome', // Use Google Chrome
        headless: false,   // Run in headed mode
      },
    },
  ],
};

module.exports = config;
