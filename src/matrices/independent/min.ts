export const min = (matrix: number[][]) => {
  return matrix.reduce((min, row) => {
    return Math.min(min, ...row);
  }, Infinity);
};
