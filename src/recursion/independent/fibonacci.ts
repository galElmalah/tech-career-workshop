/**
 * Given a number n calculate the nth fibonacci number - https://en.wikipedia.org/wiki/Fibonacci_number
 */
export const fibonacci = (n: number) => {
  if (n <= 1) {
    return n;
  }

  return fibonacci(n - 1) + fibonacci(n - 2);
};
