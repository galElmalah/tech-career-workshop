/**
 * Given a number n calculate !n i.e n factorial - https://en.wikipedia.org/wiki/Factorial
 */
export const factorial = (n: number) => {
  return n > 0 ? n * factorial(n - 1) : 1;
};
