"""Run a small demonstration of the Project Equality checklist."""
from .policy import review


def main() -> None:
    sample = {
        "impacts_people": True,
        "high_impact": True,
        "sensitive_data": True,
        "no_appeal": True,
        "no_accountability": False,
        "no_explanation": True,
        "bias_risk": True,
        "coercion_risk": False,
        "power_concentration": True,
    }
    result = review(sample)
    print("PROJECT EQUALITY — SAMPLE IMPACT REVIEW")
    print("\nAreas flagged for attention:")
    for item in result.flagged:
        print(f"- {item}: {review.__doc__ if False else item.replace('_', ' ')}")
    print("\nSuggested safeguards:")
    for item in result.suggested_safeguards:
        print(f"- {item}")
    print("\n" + result.disclaimer)


if __name__ == "__main__":
    main()
