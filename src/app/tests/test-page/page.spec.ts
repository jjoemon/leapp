import { test, expect } from '@playwright/test';

test.describe('Joemon Dashboard Page', () => {

  test.beforeEach(async ({ page }) => {
    // Go to your dev server
    await page.goto('http://localhost:3000');
  });

  test('should display the main heading', async ({ page }) => {
    const heading = page.locator('h1');
    await expect(heading).toContainText("Joemon's Dashboard");
  });

  test('should display the dashboard image', async ({ page }) => {
    const image = page.locator('img[alt="Dashboard image"]');
    await expect(image).toBeVisible();
  });

  test('should display the "Latest Entries" heading', async ({ page }) => {
    const subheading = page.locator('h3', { hasText: 'Latest Entries' });
    await expect(subheading).toBeVisible();
  });

  test('should list entries with title, userId, description and date', async ({ page }) => {
    const entries = page.locator('ul li');

    // Check that at least one entry exists
    await expect(entries).toHaveCountGreaterThan(0);

    // Check the first entry
    const firstEntry = entries.first();
    await expect(firstEntry.locator('h3')).not.toBeEmpty();       // userId
    await expect(firstEntry.locator('h4')).not.toBeEmpty();       // title
    await expect(firstEntry.locator('p')).not.toBeEmpty();        // description
    await expect(firstEntry.locator('small')).not.toBeEmpty();    // date
  });
});
