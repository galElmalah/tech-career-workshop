import {isPalindrome, isAnagram, capitalize, isBalancedParenthesis} from '.'

describe('Strings', () => {
  describe('isAnagram', () => {
    it('returns true for anagrams', () => {
      const testCases = [['im', 'mi'], ['abcccmlk', 'ccmlkabc'], ['some', 'mose'], ['New York Times' ,'monkeys write']]
      testCases.forEach(([a,b]) => expect(isAnagram(a,b)).toBe(true))
    })

    
    it('returns false for strings that does not contain the same chars', () => {
     
      expect(isAnagram('icm','imk')).toBe(false)
    })

    it('returns false for strings of different lengths', () => {
      expect(isAnagram('ic', 'icl')).toBe(false)
    })
  })

  describe('isPalindrome', () => {
    it('returns true for palindromes', () => {
      const testCases = ['wow', 'anna','repaper']
      testCases.forEach((testCase) => expect(isPalindrome(testCase)).toBe(true))
    })

    
    it('returns false for strings that are not palindromes', () => {
      const testCases = ['woww', 'annaf','some string']
      testCases.forEach((testCase) => expect(isPalindrome(testCase)).toBe(false))
    })
  })

  describe('capitalize', () => {
    it('Change the first char in a word to be upper case', () => {
      const sentence = 'im a sentence'
      const word = 'word'
      expect(capitalize(sentence)).toBe('Im a sentence')
      expect(capitalize(word)).toBe('Word')
    })
  })

  describe('isBalancedParenthesis', () => {
    it('Returns true for balanced parenthesis', () => {
      const testCases = ['()','[()]', '[()]{}{[()()]()}']
      testCases.forEach((testCase) => expect(isBalancedParenthesis(testCase)).toBe(true))
    })

    it('Returns false for unbalanced parenthesis', () => {
      const testCases = ['((','[', '([()]{}(']
      testCases.forEach((testCase) => expect(isBalancedParenthesis(testCase)).toBe(false))
    })
  })

  describe('robotPath', () => {

  })
})