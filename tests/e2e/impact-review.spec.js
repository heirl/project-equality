const { test, expect } = require("@playwright/test");

test.beforeEach(async ({ page }) => {
  await page.goto("./");
  await expect(page.getByRole("heading", { name: "Project Equality" })).toBeVisible();
});

test("loads the impact review page and its key sections", async ({ page }) => {
  await expect(page.getByRole("heading", { name: "Proposal" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Impact and safeguards" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Important limitation" })).toBeVisible();
  await expect(page.getByLabel("Proposal or system name")).toBeVisible();
  await expect(page.getByLabel("Purpose and intended use")).toBeVisible();
});

test("generates review notes from selected risk flags", async ({ page }) => {
  await page.getByLabel("Proposal or system name").fill("AI Recruitment System");
  await page.getByLabel("Purpose and intended use").fill(
    "Automatically shortlist job applicants using AI."
  );

  await page.getByLabel("This proposal affects people or their opportunities.").check();
  await page.getByLabel(
    "It may affect health, safety, rights, employment, education, finances, or access to essential services."
  ).check();
  await page.getByLabel("It uses personal or sensitive data.").check();
  await page.getByLabel("There may be discrimination or unequal impact.").check();
  await page.getByLabel("There is no clear appeal or human review process.").check();

  await page.getByRole("button", { name: "Generate review notes" }).click();

  const output = page.locator("#output");
  await expect(output).toContainText("PROJECT EQUALITY — IMPACT REVIEW");
  await expect(output).toContainText("AI Recruitment System");
  await expect(output).toContainText("Require proportionate expert review");
  await expect(output).toContainText("Minimize data");
  await expect(output).toContainText("Test outcomes across relevant groups");
  await expect(output).toContainText("Create an accessible appeal path");
  await expect(output).toContainText("Self-assessment only");
});

test("warns when no risk flags are selected", async ({ page }) => {
  await page.getByRole("button", { name: "Generate review notes" }).click();
  await expect(page.locator("#output")).toContainText(
    "No risk flags selected. This does not establish that the proposal is safe."
  );
});

test("clears entered values, selected flags, and generated notes", async ({ page }) => {
  await page.getByLabel("Proposal or system name").fill("Temporary proposal");
  await page.getByLabel("This proposal affects people or their opportunities.").check();
  await page.getByRole("button", { name: "Generate review notes" }).click();
  await expect(page.locator("#output")).toContainText("Temporary proposal");

  await page.getByRole("button", { name: "Clear" }).click();

  await expect(page.getByLabel("Proposal or system name")).toHaveValue("");
  await expect(page.getByLabel("This proposal affects people or their opportunities.")).not.toBeChecked();
  await expect(page.locator("#output")).toHaveText("Your review notes will appear here.");
});

test("copies generated review notes to the clipboard", async ({ page, context }) => {
  await context.grantPermissions(["clipboard-read", "clipboard-write"]);
  await page.getByLabel("Proposal or system name").fill("Clipboard test");
  await page.getByRole("button", { name: "Generate review notes" }).click();
  await page.getByRole("button", { name: "Copy notes" }).click();

  await expect(page.getByRole("button", { name: "Copied" })).toBeVisible();
  const clipboardText = await page.evaluate(() => navigator.clipboard.readText());
  expect(clipboardText).toContain("Clipboard test");
  expect(clipboardText).toContain("PROJECT EQUALITY — IMPACT REVIEW");
});
