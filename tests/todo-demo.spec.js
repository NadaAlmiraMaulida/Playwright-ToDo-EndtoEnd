import { test, expect } from "@playwright/test";

test("test to-do app @sanity", async ({ page }) => {
  await page.goto("https://todomvc.com/examples/react/dist/");

  // Tambah todo satu per satu
  const input = page.getByTestId("text-input");

  await input.fill("Buy Grocery");
  await input.press("Enter");

  await input.fill("Go for walk");
  await input.press("Enter");

  await input.fill("Rest");
  await input.press("Enter");

  await input.fill("Play");
  await input.press("Enter");

  // Tandai beberapa sebagai completed
  await page.getByRole("listitem").filter({ hasText: "Rest" }).getByTestId("todo-item-toggle").check();

  await page.getByRole("listitem").filter({ hasText: "Buy Grocery" }).getByTestId("todo-item-toggle").check();

  // Navigasi filter
  await page.getByRole("link", { name: "Active" }).click();
  await expect(page.getByTestId("todo-list")).toContainText("Go for walk");

  await page.getByRole("link", { name: "Completed" }).click();
  await expect(page.getByTestId("todo-list")).toContainText("Rest");

  // Clear completed
  await page.getByRole("button", { name: "Clear completed" }).click();

  await page.getByRole("link", { name: "All" }).click();
  await expect(page.locator(".todo-list li")).toHaveCount(3);
});
