import { isPalindrome, isAnagram, capitalize, isBalancedParenthesis, robotPath, howManyGoldBags } from '.';
import * as fs from 'fs';
import { join } from 'path';

describe('Strings', () => {
  describe('isAnagram', () => {
    it('returns true for anagrams', () => {
      const testCases = [['im', 'mi'], ['abcccmlk', 'ccmlkabc'], ['some', 'mose'], ['New York Times', 'monkeys write']];
      testCases.forEach(([a, b]) => expect(isAnagram(a, b)).toBe(true));
    });

    it('returns false for strings that does not contain the same chars', () => {
      expect(isAnagram('icm', 'imk')).toBe(false);
    });

    it('returns false for strings of different lengths', () => {
      expect(isAnagram('ic', 'icl')).toBe(false);
    });
  });

  describe('isPalindrome', () => {
    it('returns true for palindromes', () => {
      const testCases = ['wow', 'anna', 'repaper'];
      testCases.forEach((testCase) => expect(isPalindrome(testCase)).toBe(true));
    });

    it('returns false for strings that are not palindromes', () => {
      const testCases = ['woww', 'annaf', 'some string'];
      testCases.forEach((testCase) => expect(isPalindrome(testCase)).toBe(false));
    });
  });

  describe('capitalize', () => {
    it('Change the first char in a word to be upper case', () => {
      const sentence = 'im a sentence';
      const word = 'word';
      expect(capitalize(sentence)).toBe('Im a sentence');
      expect(capitalize(word)).toBe('Word');
    });
  });

  describe('isBalancedParenthesis', () => {
    it('Returns true for a simple case ()', () => {
      expect(isBalancedParenthesis('()')).toBe(true);
    });

    it('Returns true for more complex cases', () => {
      const testCases = ['[()]{}', '([{}]{()})', '[()]{}{[()()]()}'];
      testCases.forEach((testCase) => expect(isBalancedParenthesis(testCase)).toBe(true));
    });

    it('Returns false for unbalanced parenthesis', () => {
      const testCases = ['((', '[', '([()]{}(', '[(])'];
      testCases.forEach((testCase) => expect(isBalancedParenthesis(testCase)).toBe(false));
    });
  });

  describe('robotPath', () => {
    it('should get the robot back to 0,0', () => {
      const path = 'UURRDDLL';
      const upAndDown = 'UUDD';
      const rightAndLeft = 'RRLL';
      expect(robotPath(path)).toEqual({ x: 0, y: 0 });
      expect(robotPath(upAndDown)).toEqual({ x: 0, y: 0 });
      expect(robotPath(rightAndLeft)).toEqual({ x: 0, y: 0 });
    });

    it('should go to the right', () => {
      const rightPath = 'RRRRRRRRR';
      expect(robotPath(rightPath)).toEqual({ x: rightPath.length, y: 0 });
    });

    it('should go to the left', () => {
      const leftPath = 'LLLLLLLL';
      expect(robotPath(leftPath)).toEqual({ x: -leftPath.length, y: 0 });
    });

    it('should go up', () => {
      const upPath = 'UUUUUUU';
      expect(robotPath(upPath)).toEqual({ x: 0, y: upPath.length });
    });

    it('should go down', () => {
      const downPath = 'DDDDDD';
      expect(robotPath(downPath)).toEqual({ x: 0, y: -downPath.length });
    });

    it('should get the robot to the right coordinates', () => {
      const path = 'DDUUUUULLRLLRLDLRDDD';
      expect(robotPath(path)).toEqual({ x: -3, y: -1 });
    });
  });

  describe('bonus', () => {
    it('Returns 4 for the example input', () => {
      const testInput = `light red bags contain 1 bright white bag, 2 muted yellow bags.
      dark orange bags contain 3 bright white bags, 4 muted yellow bags.
      bright white bags contain 1 shiny gold bag.
      muted yellow bags contain 2 shiny gold bags, 9 faded blue bags.
      shiny gold bags contain 1 dark olive bag, 2 vibrant plum bags.
      dark olive bags contain 3 faded blue bags, 4 dotted black bags.
      vibrant plum bags contain 5 faded blue bags, 6 dotted black bags.
      faded blue bags contain no other bags.
      dotted black bags contain no other bags.`;
      expect(howManyGoldBags(testInput)).toBe(4);
    });

    it('Returns 192 for the actual input', () => {
      const testInput = fs.readFileSync(join(__dirname, '/independent/bonus-input.txt'), 'utf-8');
      expect(howManyGoldBags(testInput)).toBe(192);
    });
  });
});
