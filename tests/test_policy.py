import unittest

from project_equality.policy import PROMPTS, review


class PolicyReviewTests(unittest.TestCase):
    def test_flags_selected_concern(self):
        result = review({"impacts_people": True})
        self.assertEqual(result.flagged, ["impacts_people"])

    def test_suggests_accountability_safeguard(self):
        result = review({"no_accountability": True})
        self.assertTrue(any("accountable owner" in item for item in result.suggested_safeguards))

    def test_rejects_unknown_key(self):
        with self.assertRaises(ValueError):
            review({"unknown": True})

    def test_omitted_prompts_are_marked_unverified(self):
        result = review({})
        self.assertEqual(result.prompts_to_verify, list(PROMPTS))
        self.assertEqual(result.flagged, [])

    def test_explicit_false_is_not_flagged(self):
        result = review({"bias_risk": False})
        self.assertNotIn("bias_risk", result.flagged)
        self.assertNotIn("bias_risk", result.prompts_to_verify)

    def test_output_order_is_stable_not_input_order(self):
        result = review({"power_concentration": True, "impacts_people": True})
        self.assertEqual(result.flagged, ["impacts_people", "power_concentration"])

    def test_rejects_string_boolean(self):
        with self.assertRaises(TypeError):
            review({"bias_risk": "false"})

    def test_rejects_integer_boolean(self):
        with self.assertRaises(TypeError):
            review({"high_impact": 1})

    def test_rejects_null_answer(self):
        with self.assertRaises(TypeError):
            review({"sensitive_data": None})

    def test_rejects_non_mapping_input(self):
        with self.assertRaises(TypeError):
            review(None)

    def test_complete_answers_leave_nothing_unverified(self):
        result = review({key: False for key in PROMPTS})
        self.assertEqual(result.prompts_to_verify, [])
        self.assertEqual(result.flagged, [])


if __name__ == "__main__":
    unittest.main()
