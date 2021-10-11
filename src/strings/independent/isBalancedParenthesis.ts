// Input: exp = “[()]{}{[()()]()}”
// Output: Balanced

// Input: exp = “[(])”
// Output: Not Balanced
/**
 *
 * Given an expression that is composed of 3 kinds of parenthesis "(","{" and "[", determine if the parenthesis are balanced.
 * @example [{}]() balanced
 * @example [{} not balanced (missing "]")
 * @example ([{}]() not balanced (missing a closing "(" for the first paren)
 * Hint: use a stack (https://en.wikipedia.org/wiki/Stack_(abstract_data_type)) to keep track of opened parenthesis
 * Detailed solution: https://www.geeksforgeeks.org/check-for-balanced-parentheses-in-an-expression/
 */
export const isBalancedParenthesis = (expression: string) => {
  const stack = [];
  const parenthesisMap = {
    '(': ')',
    '[': ']',
    '{': '}'
  };

  for (const paren of expression.split('')) {
    if (parenthesisMap[paren]) {
      stack.push(paren);
      continue;
    }

    if (paren !== parenthesisMap[stack.pop()]) {
      return false;
    }
  }

  return stack.length === 0;
};
