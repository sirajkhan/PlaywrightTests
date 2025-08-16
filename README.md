# Playwright Tests Project Structure and Explanation

This project uses [Playwright](https://playwright.dev/) for end-to-end browser testing. Here is an explanation of the default structure and how Playwright works:

## Project Structure

```
PlaywrightTests/
├── node_modules/           # Installed dependencies
├── package.json            # Project metadata and dependencies
├── package-lock.json       # Dependency lock file
├── playwright.config.js    # Playwright configuration (added for best practices)
├── test-results/           # Output folder for test results and reports
└── tests/                  # Folder containing your test files
    └── example.spec.js  # Example test file
```

## Key Files

- **playwright.config.js**: Main configuration file for Playwright. Controls test directory, timeouts, retries, reporters, and browser settings.
- **tests/**: All test files go here. Each file can contain one or more test cases using Playwright's test API.
- **test-results/**: Playwright saves test results and HTML reports here by default.
- **package.json**: Lists dependencies (like `@playwright/test`) and scripts.

## How Playwright Tests Work

- Playwright tests are written in JavaScript or TypeScript using the `@playwright/test` library.
- Each test launches a browser (Chromium, Firefox, or WebKit), navigates to web pages, and interacts with elements (click, fill, etc.).
- Assertions (like `expect(page).toHaveTitle(...)`) verify that the page behaves as expected.
- Tests can be run headless (no UI) or headed (with UI).
- Reports are generated after test runs (HTML, list, etc.).

## Example Test (in `tests/example.spec.js`)

```js
const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.getByRole('link', { name: 'Get started' }).click();
  await expect(page).toHaveURL(/.*intro/);
});
```

## Running Tests

1. Install dependencies:
   ```
npm install
   ```
2. Run tests:
   ```
npx playwright test
   ```
3. View HTML report:
   ```
npx playwright show-report
   ```

## Learn More
- [Playwright Docs](https://playwright.dev/docs/intro)
- [Writing Tests](https://playwright.dev/docs/writing-tests)
- [Configuration](https://playwright.dev/docs/test-configuration)
