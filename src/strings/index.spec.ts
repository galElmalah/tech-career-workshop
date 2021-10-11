import {isPalindrome, isAnagram} from '.'

describe('Strings', () => {
  describe('isAnagram', () => {
    it('returns true for anagrams', () => {
      const testCases = [['im', 'mi'], ['abcccmlk', 'ccmlkabc'], ['some', 'mose']]
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
})