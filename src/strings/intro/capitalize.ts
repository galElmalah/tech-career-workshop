/**
 * Given a word or a sentence transform the first letter to upper case
 */
export const capitalize = (word: string) => {
  const [firstChar, ...restOfTheWord] = word;
  return `${firstChar.toUpperCase()}${restOfTheWord.join('')}`;
};
