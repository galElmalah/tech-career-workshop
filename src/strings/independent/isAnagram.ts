/**
 * Given two words "a" and "b" determine if they are anagrams of one another - https://en.wikipedia.org/wiki/Anagram
 * Ignore letter case and white spaces
 */
export const isAnagram = (a: string, b: string) => {
  return solveWithMap(a, b);
};

// removes all spaces and lower case the string
const sanitize = (s: string) => s.toLowerCase().replace(/\s*/g, '');

const createCharMap = (word:string): Map<string, number> => {
  const map = new Map();
  for (const char of word.split('')) {
    if (map.has(char)) {
      map.set(char, map.get(char) + 1);
    } else {
      map.set(char, 1);
    }
  }
  return map;
};

// eslint-disable-next-line no-unused-vars
const solveWithMap = (a:string, b: string) => {
  const sanitizedA = sanitize(a);
  const sanitizedB = sanitize(b);

  if (sanitizedA.length !== sanitizedB.length) {
    return false;
  }

  const aMap = createCharMap(sanitizedA);
  const bMap = createCharMap(sanitizedB);

  for (const char of aMap.keys()) {
    if (bMap.get(char) !== aMap.get(char)) {
      return false;
    }
  }
  return true;
};

// eslint-disable-next-line no-unused-vars
const solveWithSorting = (a:string, b: string) => {
  const sanitizedA = sanitize(a);
  const sanitizedB = sanitize(b);
  return sanitizedA.split('').sort().join('') === sanitizedB.split('').sort().join('');
};
