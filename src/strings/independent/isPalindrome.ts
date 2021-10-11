/**
 * Given a word determine if it is a palindrome - https://en.wikipedia.org/wiki/Palindrome
 */
export const isPalindrome = (word: string) => {
  for (let i = 0; i < Math.floor(word.length / 2); i++) {
    if (word[i] !== word[word.length - 1 - i]) {
      return false;
    }
  }
  return true;
};

// eslint-disable-next-line no-unused-vars
const oneLiner = (word: string) => word === word.split('').reverse().join('');
