class Solution:
    def numberToWords(self, num: int) -> str:

        if num == 0:
            return "Zero"

        below_20 = [
            "", "One", "Two", "Three", "Four",
            "Five", "Six", "Seven", "Eight", "Nine",
            "Ten", "Eleven", "Twelve", "Thirteen",
            "Fourteen", "Fifteen", "Sixteen", "Seventeen",
            "Eighteen", "Nineteen"
        ]

        tens = [
            "", "", "Twenty", "Thirty", "Forty",
            "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"
        ]

        def convert(num):
            if num < 20:
                return below_20[num]

            if num < 100:
                return tens[num // 10] + (
                    " " + below_20[num % 10] if num % 10 != 0 else ""
                )

            return (
                below_20[num // 100]
                + " Hundred"
                + (" " + convert(num % 100) if num % 100 != 0 else "")
            )

        result = []

        groups = [
            (1_000_000_000, "Billion"),
            (1_000_000, "Million"),
            (1_000, "Thousand"),
            (1, "")
        ]

        for value, word in groups:
            if num >= value:
                result.append(convert(num // value))

                if word:
                    result.append(word)

                num %= value

        return " ".join(result)

solution = Solution()

print(solution.numberToWords(12311))