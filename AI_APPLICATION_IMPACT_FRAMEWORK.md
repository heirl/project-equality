# Project Equality — AI Application Human Impact Assessment Framework

**Version:** 1.0 (initial working framework)  
**Purpose:** Assess the potential real-world effects of AI applications on people and society.

## 1. Scope

This framework applies to AI applications of all types: chatbots, generative systems, recommendation and ranking systems, prediction and scoring tools, decision-support systems, automated decision systems, AI agents, robotics, and monitoring or biometric systems.

Every application can receive an initial review. The depth of review must be proportionate to its context, scale, autonomy, affected population, and potential consequences. Applications that may affect health, physical safety, fundamental rights, employment, education, housing, finances, or essential services require deeper scrutiny.

The unit of assessment is the **application in its actual context of use**, not simply the underlying model. The same model may create very different impacts in different deployments.

## 2. Assessment principles

- **Human dignity:** Consider the rights, wellbeing, agency, and dignity of all affected people, including non-users and bystanders.
- **Benefits and harms:** Examine intended benefits, who receives them, who bears costs, and unintended consequences.
- **Proportionality:** Match scrutiny and safeguards to severity, likelihood, scale, autonomy, reversibility, and uncertainty.
- **Lifecycle responsibility:** Reassess at concept, development, testing, deployment, material change, and retirement.
- **Evidence and uncertainty:** Distinguish evidence, assumptions, forecasts, unknowns, and self-reported claims.
- **Contestability and remedy:** People affected by consequential AI-supported decisions should have meaningful ways to seek explanation, human review, correction, appeal, and remedy.
- **Accountability:** A named person or organisation remains responsible. Responsibility cannot be delegated to the AI system.
- **No false assurance:** This framework is not a certification, audit, legal opinion, safety guarantee, or substitute for applicable law or independent review.

## 3. Required assessment dimensions

### A. Application profile
Record purpose, intended and foreseeable uses, application type, lifecycle stage, operator, users, affected people (including non-users), deployment context, scale, and level of automation.

### B. Potential benefits
Identify specific expected benefits, intended beneficiaries, evidence supporting the claims, distribution of benefits, and groups who may be excluded.

### C. Potential harms
Investigate, where relevant:
- Physical health and safety
- Psychological, emotional, and social wellbeing
- Bias, discrimination, and unequal outcomes
- Privacy, data protection, and surveillance
- Deception, misinformation, and lack of transparency
- Manipulation, coercion, and loss of autonomy
- Unfair decisions, lack of explanation, appeal, or remedy
- Cybersecurity compromise and malicious misuse
- Employment, livelihoods, and economic distribution
- Environmental and resource impacts
- Concentration of power and systemic dependence
- Errors, unreliability, automation bias, and overreliance

These are prompts for investigation, not a claim that every application causes every harm.

### D. Severity, likelihood, reach, and reversibility
For each material harm scenario, document:
1. Who could be harmed and how?
2. Worst credible severity (not merely the average outcome).
3. Likelihood, with evidence and assumptions.
4. Number and types of people exposed.
5. Duration and reversibility.
6. Whether harm could be cumulative, systemic, or difficult to detect.
7. Confidence in the assessment and major unknowns.

Do not combine these into a single numerical score until a validated methodology, weighting rationale, and calibration evidence exist. A high-severity low-frequency scenario must not be hidden by averaging.

### E. Human control and safeguards
Review disclosure, meaningful human oversight, data minimisation and security, testing across relevant groups, robustness, misuse prevention, accessible appeal and remedy, incident reporting, monitoring, fallback procedures, pause/shutdown capability, and named accountability.

### F. Lifecycle monitoring
Define measurable indicators, affected-person feedback channels, review frequency, incident thresholds, escalation owners, rollback criteria, and reassessment triggers. Reassess after changes to model, data, purpose, user population, scale, autonomy, or deployment environment.

## 4. Risk tiering: scrutiny, not a safety score

The framework should use qualitative review priority rather than declare an application “safe” or “unsafe”.

- **Baseline review:** All applications. Establish purpose, affected people, benefits, plausible harms, data use, transparency, and accountable owner.
- **Enhanced review:** Applications with meaningful exposure, sensitive data, substantial scale, limited transparency, significant autonomy, or plausible moderate-to-serious harms. Require documented testing, safeguards, monitoring, and affected-user input.
- **High-impact review:** Applications that may materially affect health, safety, fundamental rights, employment, education, housing, finances, or essential services. Require domain expertise, rigorous validation, meaningful human oversight, accessible challenge and remedy, documented approval, and ongoing monitoring.
- **Critical-risk escalation:** Credible potential for death, severe injury, widespread rights violations, or large-scale irreversible harm. Pause deployment or expansion until an independent, context-appropriate assessment demonstrates that risks are adequately addressed. Legal obligations and prohibitions take precedence.

A tier is a review priority, not a certification or legal classification. The context and actual use determine the appropriate level.

## 5. Report format

Every assessment should produce:
1. Application profile and intended use
2. Affected people and context
3. Expected benefits and beneficiaries
4. Plausible harms and affected groups
5. Severity, likelihood, reach, reversibility, and confidence for each major scenario
6. Existing safeguards and evidence
7. Gaps and unresolved questions
8. Recommended mitigations, owners, and deadlines
9. Deployment, monitoring, and reassessment conditions
10. Limitations and dissenting views

Clearly label each statement as **evidence**, **developer-reported**, **assumption**, **forecast**, or **unknown**.

## 6. Minimum safeguards before consequential deployment

- Define intended use and prohibited or out-of-scope uses.
- Map affected people, including those who cannot opt out.
- Test performance and error patterns in realistic conditions and relevant subgroups.
- Evaluate privacy, security, misuse, and data governance.
- Tell people when AI is involved where that knowledge is material.
- Provide human review that is competent, timely, and able to change the outcome.
- Provide accessible ways to challenge decisions and seek remedy.
- Assign an accountable operator and incident-response owner.
- Monitor real-world outcomes and maintain rollback or shutdown procedures.
- Obtain independent and domain-specific review where consequences warrant it.

## 7. What this framework does not do

It does not inspect a model, dataset, codebase, or deployment environment; independently verify developer answers; prove that an application is safe or fair; predict all future effects; assign a scientifically validated risk score; certify compliance; or replace regulators, law, professional standards, affected-community participation, security testing, or independent audits.

## 8. Revision

This is an initial working framework. It should be tested against diverse real-world application scenarios, reviewed by affected communities and domain experts, and revised transparently. Record version history, rationale, evidence, disagreements, and known limitations.
