import { test, expect } from '@playwright/test';

test('home page loads correctly', async ({ page }) => {
  await page.goto('/');

  await expect(page).toHaveTitle(/React Template/);

  await expect(
    page.getByRole('heading', { name: 'React Template' })
  ).toBeVisible();
});

test('has correct content', async ({ page }) => {
  await page.goto('/');

  await expect(
    page.getByText(/highly engineered Next.js template/)
  ).toBeVisible();
});
