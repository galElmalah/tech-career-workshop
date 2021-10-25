export const max = (matrix: number[][]) => {
  return matrix.reduce((max, row) => {
    return Math.max(max, ...row);
  }, -Infinity);
};
