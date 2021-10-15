/**
 * Given a number n calculate the sum of numbers up to n in a recursive manner
 * for example - sum(4) = 4 + 3 + 2 + 1
 */
export const sum = (n: number) => {
  return n > 0 ? n + sum(n - 1) : 0;
};
