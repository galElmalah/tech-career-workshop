export const isMagicSquare = (matrix: number[][]) => {
  const sum = (arr:number[]) => arr.reduce((acc, n) => acc + n, 0);
  const sumOfRow = sum(matrix[0]);
  if (!matrix.every(row => sum(row) === sumOfRow)) {
    return false;
  }

  for (let column = 0; column < matrix.length; column++) {
    let colSum = 0;
    for (let row = 0; row < matrix[0].length; row++) {
      colSum += matrix[row][column];
    }
    if (colSum !== sumOfRow) {
      return false;
    }
  }

  let mainDiagonalSum = 0;
  for (let i = 0; i < matrix.length; i++) {
    mainDiagonalSum += matrix[i][i];
  }
  if (mainDiagonalSum !== sumOfRow) {
    return false;
  }

  let secondaryDiagonalSum = 0;
  for (let i = 0; i < matrix.length; i++) {
    secondaryDiagonalSum += matrix[i][matrix.length - i - 1];
  }
  if (secondaryDiagonalSum !== sumOfRow) {
    return false;
  }

  return true;
};
