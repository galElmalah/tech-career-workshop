import { factorial, fibonacci, sum, isPalindrome } from '.';

describe('Recursion', () => {
  describe('factorial', () => {
    it('returns 1 for !0', () => {
      expect(factorial(0)).toBe(1);
    });

    it('returns 1 for !1', () => {
      expect(factorial(1)).toBe(1);
    });

    it('returns 120 for !5', () => {
      expect(factorial(5)).toBe(120);
    });

    it('returns 479001600 for !12', () => {
      expect(factorial(12)).toBe(479001600);
    });
  });

  describe('sum', () => {
    it('returns 1 for sum(1)', () => {
      expect(sum(1)).toBe(1);
      expect(fibonacci(2)).toBe(1);
    });

    it('returns 0 for fibonacci(0)', () => {
      expect(fibonacci(0)).toBe(0);
    });

    it('returns the right fibonacci number', () => {
      const testCases = [[20, 6765], [19, 4181], [18, 2584]];
      testCases.forEach(([input, expectedOutput]) => expect(fibonacci(input)).toBe(expectedOutput));
    });
  });

  describe('sum', () => {
    it('returns 1 for sum(1)', () => {
      expect(sum(1)).toBe(1);
    });

    it('returns 0 for sum(0)', () => {
      expect(sum(0)).toBe(0);
    });

    it('returns 10 for sum(4)', () => {
      expect(sum(4)).toBe(10);
    });

    it('returns 55 for sum(10)', () => {
      expect(sum(10)).toBe(55);
    });
  });
  describe('isPalindrome', () => {
    it('returns true for palindromes', () => {
      const testCases = ['wow', 'anna', 'repaper'];
      testCases.forEach((testCase) => expect(isPalindrome(testCase, 0, testCase.length - 1)).toBe(true));
    });

    it('returns false for strings that are not palindromes', () => {
      const testCases = ['woww', 'annaf', 'some string'];
      testCases.forEach((testCase) => expect(isPalindrome(testCase, 0, testCase.length - 1)).toBe(false));
    });
  });
});
