import { test, expect } from '@playwright/test';

const pages = [
  { name: 'Home', url: 'https://safepassagestrategies.com/' },
  { name: 'Services', url: 'https://safepassagestrategies.com/services/' },
  { name: 'What We Build', url: 'https://safepassagestrategies.com/what-we-build/' },
  { name: 'Contact', url: 'https://safepassagestrategies.com/contact/' },
];

for (const pageInfo of pages) {
  test(`${pageInfo.name} loads and shows a visible h1`, async ({ page }) => {
    await page.goto(pageInfo.url, { waitUntil: 'domcontentloaded' });

    await expect(page).toHaveTitle(/.+/);

    const heading = page.locator('h1').first();
    await expect(heading).toBeVisible();
  });
}