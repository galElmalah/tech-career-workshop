export const sum = (matrix: number[][]) => {
  return matrix.reduce((sum, row) => {
    return sum + row.reduce((s, n) => s + n);
  }, 0);
};
