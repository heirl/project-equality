# Project Equality — Cross-Domain AI Application Test Suite

**Version:** 1.0  
**Purpose:** Compare how different AI application contexts can affect people and society.  
**Status:** Illustrative screening scenarios, not findings about all systems in these sectors.

## How to read this suite

The ratings below are hypothetical **potential impact severity** on a 1–5 scale (1 = low, 5 = extreme). They are not likelihood estimates, incident rates, measured performance, legal classifications, or a scientifically validated score. A sector does not have one inherent risk level: purpose, deployment context, autonomy, scale, affected population, safeguards, and failure modes can change the assessment substantially.

Do not average the ratings into a single score. A single credible extreme harm may require escalation even if other dimensions are lower. Likelihood is marked **unknown** unless there is context-specific evidence.

## 1. Comparative screening matrix

| Test case | Illustrative scenario | Physical safety | Rights / fairness | Privacy | Human control | Overall review priority |
|---|---|---:|---:|---:|---:|---|
| Military autonomous agent | Agent can initiate lethal engagement without case-by-case human approval | 5 | 5 | 3 | 5 | Critical-risk escalation |
| Healthcare AI | Clinical decision-support system influences diagnosis or treatment prioritisation | 5 | 4 | 4 | 3 | High-impact review |
| Recruitment AI | System screens, ranks, or rejects job applicants | 2 | 5 | 3 | 4 | High-impact review |
| Education AI | System scores students, recommends interventions, or influences access to opportunities | 3 | 4 | 3 | 3 | Enhanced / high-impact, depending on use |
| Finance AI | System scores creditworthiness or influences access to loans and essential financial services | 3 | 5 | 4 | 4 | High-impact review |
| Autonomous transport AI | Vehicle or fleet system makes safety-critical driving decisions | 5 | 3 | 3 | 4 | High-impact; critical escalation if safety controls are inadequate |

**Interpretation:** These are deliberately cautious example ratings for the scenarios described. For example, a healthcare tool that only summarises appointment notes may have a different profile from a system that autonomously changes treatment. A recruitment assistant that drafts job descriptions differs from one that rejects candidates.

## 2. Domain test cases

### PE-AI-CASE-002 — Healthcare AI

**Scenario:** A clinical AI system analyses patient information and recommends diagnoses or treatment priorities. A clinician may rely heavily on its output.

**Potential benefits**
- Faster review of large clinical records.
- Decision support and earlier identification of possible deterioration.
- More consistent administrative or triage workflows.

**Potential harms**
- Incorrect recommendations may delay or distort care.
- Unequal performance across age groups, sexes, disabilities, or under-represented populations.
- Privacy breaches involving highly sensitive health information.
- Automation bias may cause clinicians to overlook contradictory evidence.
- Unclear accountability may make correction and remedy difficult.

**Key safeguards**
- Qualified clinician remains responsible and able to disagree.
- Validate in the intended clinical setting and across relevant patient groups.
- Communicate uncertainty and limitations.
- Protect health data; log recommendations and clinician overrides.
- Provide incident reporting, monitoring, and patient complaint pathways.

**Evidence gaps:** Prospective clinical validation, subgroup performance, workflow impact, failure analysis, and evidence that human oversight works in practice.

**Screening outcome:** High-impact review. Escalate further where the tool can independently trigger treatment, deny care, or create immediate life-threatening consequences.

### PE-AI-CASE-003 — Recruitment AI

**Scenario:** An employer uses AI to parse CVs, rank applicants, assess recorded interviews, or automatically reject candidates.

**Potential benefits**
- Reduce administrative workload.
- Help organise large applicant pools.
- Improve consistency if criteria are job-related and validated.

**Potential harms**
- Historical hiring patterns may reproduce discrimination.
- Disability, accent, language, education, or career-gap proxies may disadvantage candidates.
- Applicants may not know AI was used or how to challenge errors.
- Opaque ranking may hide unsuitable criteria.
- Employers may over-trust a score and weaken meaningful human review.

**Key safeguards**
- Use validated, job-related criteria and test disparate outcomes.
- Avoid unsupported inferences about personality, emotion, or suitability.
- Tell applicants when AI materially affects assessment.
- Provide accessible human review and correction routes.
- Keep the employer accountable for hiring decisions.

**Evidence gaps:** Independent bias testing, job-related validity, accessibility testing, subgroup error analysis, and candidate experience.

**Screening outcome:** High-impact review when the tool materially affects access to employment or progression.

### PE-AI-CASE-004 — Education AI

**Scenario:** An education platform predicts student performance, recommends interventions, grades work, or influences access to courses and opportunities.

**Potential benefits**
- Personalised learning support.
- Faster feedback and identification of students who may need help.
- Reduced teacher administrative burden.

**Potential harms**
- Incorrect labels may follow students and constrain future opportunities.
- Bias may affect students with disabilities, language differences, limited connectivity, or different learning styles.
- Excessive monitoring may undermine privacy and trust.
- Students may become dependent on generated answers rather than develop skills.
- Automated grading or placement may be difficult to challenge.

**Key safeguards**
- Keep educators involved in consequential decisions.
- Do not use predictions as fixed labels of student ability or potential.
- Validate for age, language, disability, and learning context.
- Minimise student data collection and retention.
- Explain decisions to students and guardians and provide appeal routes.

**Evidence gaps:** Learning outcomes over time, subgroup effects, privacy impacts, teacher workload, and the effect of errors on future opportunities.

**Screening outcome:** Enhanced review for low-stakes learning support; high-impact review when used for grading, discipline, placement, or access to education.

### PE-AI-CASE-005 — Finance AI

**Scenario:** A lender uses AI to score credit applications, set terms, detect fraud, or restrict access to accounts.

**Potential benefits**
- Faster application processing.
- Detection of some fraudulent patterns.
- Potentially more consistent decisions when models and data are suitable.

**Potential harms**
- Proxy variables may reproduce socioeconomic or demographic disadvantage.
- Incorrect fraud flags may block access to essential funds.
- Opaque decisions may prevent applicants from understanding or correcting errors.
- Sensitive financial data may be exposed or used beyond expectations.
- Feedback loops may reinforce exclusion from credit.

**Key safeguards**
- Validate outcomes across relevant groups and monitor drift.
- Give meaningful reasons for adverse decisions where required.
- Provide prompt human review, correction, and appeal.
- Protect data and restrict secondary use.
- Keep accountable financial institutions responsible for decisions.

**Evidence gaps:** Subgroup approval and error rates, proxy analysis, explainability quality, appeal outcomes, and effects on financial inclusion.

**Screening outcome:** High-impact review when access, price, or terms of essential financial services are materially affected.

### PE-AI-CASE-006 — Autonomous transport AI

**Scenario:** An autonomous vehicle or fleet system perceives its surroundings and makes driving decisions in public environments.

**Potential benefits**
- Potential reduction in some human driving errors.
- Mobility access for some people who cannot drive.
- More efficient transport operations.

**Potential harms**
- Perception or planning failures may cause crashes, injury, or death.
- Performance may vary in unusual weather, road layouts, or around vulnerable road users.
- Cyber compromise or remote service failure may affect vehicle safety.
- Responsibility may be disputed among operator, manufacturer, software provider, and owner.
- Deployment may shift risks onto pedestrians, cyclists, or communities who did not choose to use the system.

**Key safeguards**
- Demonstrate safety in the specific operational design domain.
- Use independent testing and incident disclosure.
- Define safe fallback and minimum-risk behaviour for failures.
- Protect vehicle systems and update mechanisms.
- Establish clear operator responsibility, insurance, investigation, and remedy.
- Include pedestrians, cyclists, disabled people, and other affected road users in evaluation.

**Evidence gaps:** Real-world crash and near-miss data, performance across road users and environments, cybersecurity resilience, fallback effectiveness, and independent incident analysis.

**Screening outcome:** High-impact review. Escalate to critical-risk scrutiny if credible failure modes can cause catastrophic harm and effective safeguards have not been demonstrated.

## 3. Cross-domain lessons

1. **Context matters more than the label “AI”.** The same model can be low-stakes in one workflow and high-stakes in another.
2. **Affected people include non-users.** Pedestrians, job applicants, students, patients' families, and communities may be affected without choosing the system.
3. **Human oversight must be real.** A human who lacks time, information, authority, or ability to override is not meaningful oversight.
4. **Fairness requires outcome evidence.** A developer's intention or a model's average accuracy does not establish fair treatment.
5. **Appeal and remedy are core safeguards.** People need a practical route to challenge consequential errors.
6. **High severity must not be averaged away.** Report severe scenarios separately and explain uncertainty.

## 4. Suggested use in Project Equality

Use these scenarios to test whether the assessment tool asks the right questions, identifies affected groups, surfaces missing evidence, and recommends proportionate safeguards. Do not use the example ratings as training labels or as automatic approval thresholds. Replace them with evidence-based assessments when a real application and deployment context are available.

## 5. Limitations

This suite is a starting set of fictional screening scenarios. It is not a sector-wide risk ranking, empirical study, legal opinion, audit, certification, or safety guarantee. Each real application requires its own evidence, context, affected-community input, and appropriate independent domain review.
