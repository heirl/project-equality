# Project Equality AI assessment engine setup

## What this adds

The public GitHub Pages site remains static. This separate Cloudflare Worker provides a server-side endpoint that calls the OpenAI Responses API and requests a schema-constrained assessment. The API key is held as a Worker secret; it is never sent to the browser.

## Before deployment

- Create a Cloudflare account and a Worker.
- Create an OpenAI API key in the OpenAI API platform. API billing is separate from a ChatGPT subscription.
- Never commit the key to GitHub, paste it into the website, or share it in chat.
- Deploy this folder as a Worker. The entry file is worker.js.
- Add a Worker secret named OPENAI_API_KEY using the Cloudflare dashboard's Worker Settings → Variables and Secrets. Mark it as a secret.
- Keep ALLOWED_ORIGIN set to https://heirl.github.io. Do not use a wildcard for a public production deployment.
- Configure Cloudflare rate limiting and a spending/budget alert for the endpoint. The endpoint is public and can otherwise be abused to generate API charges.

## Configure the website

After deployment, copy the Worker URL (for example, https://project-equality-assessment.<your-subdomain>.workers.dev). Open Project Equality, choose Automated idea screening, paste that URL into the AI assessment service URL field, and run an assessment. The URL is kept only in that page's current session; do not add a secret here.

The website calls POST <worker-url>/api/assess with JSON {"idea":"..."}. A successful response contains a structured assessment object. The GET <worker-url>/health route checks whether the Worker is online; it does not verify the API key or model billing.

## Local deployment using Wrangler

Install Wrangler on a computer, then from this folder:

```sh
npx wrangler secret put OPENAI_API_KEY
npx wrangler deploy
```

Set the secret when prompted. Do not put the key in a command line, source file, or shell history.

A phone-only alternative is to create the Worker in the Cloudflare dashboard, paste the contents of worker.js into its editor, add the secret in Settings → Variables and Secrets, and deploy. Dashboard labels may change.

## Important limitations and safety

- AI output can be wrong, incomplete, biased, or overconfident. Treat every severity rating as a prompt for investigation, not a measured risk probability.
- Likelihood is not inferred from severity. Do not average dimensions into one score.
- The service does not independently inspect source code, training data, deployment controls, or real-world evidence.
- Do not submit personal, confidential, classified, or sensitive operational information.
- Military/weapon scenarios receive human-impact and governance analysis only; the service must not be used for targeting or operational instructions.
- Add authentication, abuse controls, monitoring, privacy notice, and retention review before broad public launch.
- OpenAI API usage is billed separately from a ChatGPT plan.
