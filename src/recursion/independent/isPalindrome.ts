/**
 * Given a word determine if it is a palindrome in a recursive manner - https://en.wikipedia.org/wiki/Palindrome
 */
export const isPalindrome = (word: string, low: number, high: number) => {
  if (low >= high) {
    return true;
  }

  if (word[low] !== word[high]) {
    return false;
  }

  return isPalindrome(word, low + 1, high - 1);
};
