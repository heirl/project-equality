import unittest

from project_equality.policy import review


class PolicyReviewTests(unittest.TestCase):
    def test_flags_selected_concern(self):
        result = review({"impacts_people": True})
        self.assertIn("impacts_people", result.flagged)

    def test_suggests_accountability_safeguard(self):
        result = review({"no_accountability": True})
        self.assertTrue(any("accountable owner" in item for item in result.suggested_safeguards))

    def test_rejects_unknown_key(self):
        with self.assertRaises(ValueError):
            review({"unknown": True})


if __name__ == "__main__":
    unittest.main()
