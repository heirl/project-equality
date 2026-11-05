const { test, expect } = require("@playwright/test");

test.beforeEach(async ({ page }) => {
  await page.goto("./");
  await expect(page.getByRole("heading", { name: "Project Equality" })).toBeVisible();
  await page.getByRole("button", { name: "Manual assessment" }).click();
});

test("loads the AI application human impact assessment", async ({ page }) => {
  await expect(page.getByRole("heading", { name: "1. Describe the AI application" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "2. Potential benefits" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "3. Potential harms and risk areas" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "4. Scale, severity, and exposure" })).toBeVisible();
  await expect(page.getByLabel("Application or system name")).toBeVisible();
  await expect(page.getByLabel("Application type")).toBeVisible();
});

test("generates a report covering benefits, harms, and review priorities", async ({ page }) => {
  await page.getByLabel("Application or system name").fill("AI Recruitment System");
  await page.getByLabel("Application type").selectOption("Automated decision-making system");
  await page.getByLabel("Purpose and intended use").fill("Screens and ranks job applicants.");
  await page.getByLabel("Who will use it, and who may be affected (including non-users)?").fill("Applicants, recruiters, hiring managers.");
  await page.getByLabel("Level of automation").selectOption("Makes or executes consequential decisions with little/no human review");
  await page.getByLabel("Improves access, inclusion, or accessibility").check();
  await page.getByLabel("Bias, discrimination, or unequal outcomes").check();
  await page.getByLabel("Unfair decisions or lack of appeal").check();
  await page.getByLabel("Worst credible harm severity").selectOption("High — serious impact on health, livelihood, rights, or opportunities");
  await page.getByLabel("Could it affect health, safety, fundamental rights, employment, education, finances, housing, or essential services?").selectOption("yes");
  await page.getByRole("button", { name: "Generate human impact report" }).click();

  const output = page.locator("#output");
  await expect(output).toContainText("PROJECT EQUALITY — AI APPLICATION HUMAN IMPACT REPORT");
  await expect(output).toContainText("AI Recruitment System");
  await expect(output).toContainText("Improves access, inclusion, or accessibility");
  await expect(output).toContainText("Bias, discrimination, or unequal outcomes");
  await expect(output).toContainText("Do not rely on this self-assessment");
  await expect(output).toContainText("Self-assessment only");
});

test("does not treat an empty risk checklist as proof of safety", async ({ page }) => {
  await page.getByRole("button", { name: "Generate human impact report" }).click();
  await expect(page.locator("#output")).toContainText("No risk areas selected. This is not evidence that the application is safe.");
  await expect(page.locator("#output")).toContainText("an empty checklist does not demonstrate absence of harm");
});

test("clears entered values, selections, and generated report", async ({ page }) => {
  await page.getByLabel("Application or system name").fill("Temporary AI system");
  await page.getByLabel("Bias, discrimination, or unequal outcomes").check();
  await page.getByRole("button", { name: "Generate human impact report" }).click();
  await expect(page.locator("#output")).toContainText("Temporary AI system");
  await page.getByRole("button", { name: "Clear form" }).click();
  await expect(page.getByLabel("Application or system name")).toHaveValue("");
  await expect(page.getByLabel("Bias, discrimination, or unequal outcomes")).not.toBeChecked();
  await expect(page.locator("#output")).toHaveText("Your AI application human impact report will appear here.");
});

test("copies the generated human impact report", async ({ page, context }) => {
  await context.grantPermissions(["clipboard-read", "clipboard-write"]);
  await page.getByLabel("Application or system name").fill("Clipboard test");
  await page.getByRole("button", { name: "Generate human impact report" }).click();
  await page.getByRole("button", { name: "Copy report" }).click();
  await expect(page.getByRole("button", { name: "Copied" })).toBeVisible();
  const clipboardText = await page.evaluate(() => navigator.clipboard.readText());
  expect(clipboardText).toContain("Clipboard test");
  expect(clipboardText).toContain("PROJECT EQUALITY — AI APPLICATION HUMAN IMPACT REPORT");
});

test("automated mode explains backend setup when no AI service URL is configured", async ({ page }) => {
  await page.getByRole("button", { name: "Automated idea screening" }).click();
  await page.getByLabel("Describe your AI application idea").fill("An AI application that ranks job applicants and automatically rejects candidates.");
  await page.getByRole("button", { name: "Assess my idea" }).click();
  await expect(page.locator("#output")).toContainText("AI assessment service is not connected yet");
  await expect(page.locator("#output")).toContainText("AI_ENGINE_SETUP.md");
});

test("renders structured AI risk dimensions and a visual severity graph", async ({ page }) => {
  await page.route("https://assessment.example.workers.dev/api/assess", async route => {
    await route.fulfill({ status: 200, contentType: "application/json", body: JSON.stringify({
      assessment: {
        application_summary: "AI recruitment screening tool.",
        intended_benefits: ["Faster processing"],
        affected_groups: ["Applicants"],
        risk_dimensions: [{ dimension: "Fairness and discrimination", severity: 5, rationale: "Could exclude qualified applicants.", uncertainty: "No subgroup testing supplied." }],
        harm_scenarios: ["Unfair rejection"],
        evidence_gaps: ["Independent bias evaluation"],
        safeguards: ["Human review and appeal"],
        review_priority: "High-impact review",
        priority_reason: "It influences access to employment.",
        likelihood_assessment: "Unknown; no empirical evidence supplied.",
        limitations: ["Preliminary screening only."]
      },
      meta: { model: "test-model", generated_at: "2026-11-05T00:00:00.000Z" }
    }) });
  });
  await page.getByRole("button", { name: "Automated idea screening" }).click();
  await page.getByLabel("AI assessment service URL (required for AI-powered analysis)").fill("https://assessment.example.workers.dev");
  await page.getByLabel("Describe your AI application idea").fill("An AI application that ranks job applicants and automatically rejects candidates.");
  await page.getByRole("button", { name: "Assess my idea" }).click();
  await expect(page.locator("#output")).toContainText("AI-POWERED HUMAN IMPACT ASSESSMENT");
  await expect(page.locator("#output")).toContainText("High-impact review");
  await expect(page.locator("#riskGraph")).toContainText("Fairness and discrimination — 5/5");
});
