"""Rule-based prompts for an initial ethical-impact review.

This module is a checklist, not an audit, certification, or guarantee.
"""
from collections.abc import Mapping
from dataclasses import dataclass, field

PROMPTS = {
    "impacts_people": "Does the proposal affect people or their opportunities?",
    "high_impact": "Could it affect health, safety, rights, employment, education, finances, or essential services?",
    "sensitive_data": "Does it use personal or sensitive data?",
    "no_appeal": "Is there no clear appeal or human review process?",
    "no_accountability": "Is there no accountable human or institution?",
    "no_explanation": "Could affected people be left without an understandable explanation?",
    "bias_risk": "Could it create discrimination or unequal impact?",
    "coercion_risk": "Could it manipulate, pressure, or coerce people?",
    "power_concentration": "Could it concentrate power without adequate oversight?",
}

SAFEGUARDS = {
    "impacts_people": "Identify affected people and consult them.",
    "high_impact": "Require proportionate expert review, testing, monitoring, and documented approval.",
    "sensitive_data": "Minimize data, define purpose and retention, and apply strong access controls.",
    "no_appeal": "Create an accessible appeal path and meaningful human review.",
    "no_accountability": "Name an accountable owner and institution.",
    "no_explanation": "Provide understandable notices and explanations appropriate to the use.",
    "bias_risk": "Test outcomes across relevant groups and mitigate unjustified disparities.",
    "coercion_risk": "Assess consent, autonomy, manipulation, and alternatives.",
    "power_concentration": "Add oversight, limits, transparency, and checks against unilateral control.",
}


@dataclass
class Review:
    flagged: list[str] = field(default_factory=list)
    prompts_to_verify: list[str] = field(default_factory=list)
    suggested_safeguards: list[str] = field(default_factory=list)
    disclaimer: str = (
        "Self-assessment only; not an audit, certification, legal opinion, or guarantee. "
        "Human accountability remains essential."
    )


def review(answers: dict[str, bool]) -> Review:
    """Evaluate boolean answers; True means the concern is present.

    Omitted prompts remain unverified. Non-boolean answers are rejected so
    values such as the string "false" cannot accidentally be treated as True.
    """
    if not isinstance(answers, Mapping):
        raise TypeError("answers must be a mapping of review keys to booleans")

    unknown = set(answers) - set(PROMPTS)
    if unknown:
        raise ValueError(f"Unknown review keys: {', '.join(sorted(unknown))}")

    invalid = [key for key, value in answers.items() if type(value) is not bool]
    if invalid:
        raise TypeError(f"Answers must be booleans: {', '.join(sorted(invalid))}")

    flagged = [key for key in PROMPTS if answers.get(key) is True]
    missing = [key for key in PROMPTS if key not in answers]
    safeguards = [SAFEGUARDS[key] for key in flagged]
    return Review(flagged, missing, safeguards)
