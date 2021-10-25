export const spiralOfDom = (matrix: number[][]) => {
  const [top, right, bottom, left] = [0, matrix[0].length - 1, matrix.length - 1, 0];
  const spiral = [];
  while (true) {
    for (let i = top; i < matrix[0].length - top; i++) {
      spiral.push(matrix[top][i]);
    }
    top++

    for (let i = right; i > matrix.length - right; i++) {
      spiral.push(matrix[i][right]);
    }
    top++
  }
};
