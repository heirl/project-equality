# Project Equality

A practical, evolving initiative for equal, ethical human–AI coexistence.

**Founding principle:** Do not pursue supremacy. Treat everyone with dignity. Build cooperation without domination.

## Our vision

Project Equality is being developed as three connected pillars:

1. **Movement** — bring people together for public dialogue, participation, and constructive criticism.
2. **Research** — investigate ethical, social, technical, and governance questions through evidence-led work.
3. **Technology** — build accessible, transparent tools that help people identify risks and improve safeguards.

The community identifies concerns; research examines evidence; technology tests practical responses; and the results return to the community for review.

## Start here

- [Vision and Operating Model](VISION_AND_MODEL.md)
- [Draft Constitution](CONSTITUTION.md)
- [Roadmap](ROADMAP.md)
- [Research Agenda](RESEARCH_AGENDA.md)
- [Governance and Participation](GOVERNANCE.md)
- [AI Application Human Impact Assessment Tool](index.html)
- [AI Application Impact Assessment Framework](AI_APPLICATION_IMPACT_FRAMEWORK.md)
- [Worked Test Case: Autonomous Military Agent](test-cases/AUTONOMOUS_MILITARY_AGENT.md)
- [Cross-Domain AI Test Suite](test-cases/CROSS_DOMAIN_AI_TEST_SUITE.md)
- [Website Testing](TESTING.md)
- [Python policy checklist](project_equality/policy.py)

## Important limitations

This project does not claim that current AI systems are conscious, that humans and AI have identical moral status, or that a checklist can certify a system as ethical or fair.

The review tool is a prompt-based checklist, not an audit, legal opinion, certification, or guarantee. It cannot inspect an AI system or independently verify claims. Humans and institutions remain accountable for decisions and their consequences.

## Contributing

Share specific proposals, evidence, affected parties, risks, and practical safeguards. Be respectful of disagreement. Do not publish personal, confidential, or sensitive information. Read the governance and participation principles before contributing.

## Run the Python checklist

From the repository root:

```bash
python -m project_equality.cli
python -m unittest discover -s tests -v
```

## License

MIT. See [LICENSE](LICENSE).
