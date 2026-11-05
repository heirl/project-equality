# Project Equality — Website Testing

The deployed GitHub Pages site is tested with Playwright and Chromium.

## What the browser tests cover

- The deployed page loads and key sections are visible.
- Proposal details and risk flags can be entered.
- Review notes are generated with the expected safeguards.
- An empty selection is not presented as proof of safety.
- The Clear button resets fields, flags, and output.
- Copy notes writes the generated review to the browser clipboard.

## Automatic execution

The **Deployed site browser tests** workflow runs after the GitHub Pages deployment workflow completes successfully. It tests the public site at:

https://heirl.github.io/project-equality/

It can also be started manually from the repository's Actions tab using **Deployed site browser tests** → **Run workflow**.

## Run locally

Requirements: Node.js 20 or later.

```bash
npm install
npx playwright install chromium
npm run test:e2e
```

To test another deployment:

```bash
BASE_URL=https://example.com/ npm run test:e2e
```

## Failure reports

When a workflow fails, GitHub Actions uploads the Playwright report and test results as an artifact for seven days. Failed tests retain screenshots and traces where available.

These are functional browser checks, not a security audit, accessibility certification, fairness assessment, or proof that the review checklist is substantively complete.
