import { sum, min, max, isMagicSquare } from './index';

describe('matrices', () => {
  describe('sum', () => {
    it('sums negative values', () => {
      const matrix = [[-2, -2], [-2, -4]];
      expect(sum(matrix)).toBe(-10);
    });

    it('sums matrix of size nXm where n and m are different', () => {
      const matrix = [[-2, 2, 5]];
      expect(sum(matrix)).toBe(5);
    });

    it('sums the values in the matrix', () => {
      const matrix = [[-2, 2, 5], [-2, 2, 5], [2, 2, 5]];
      expect(sum(matrix)).toBe(19);
    });
  });

  describe('max', () => {
    it('finds the maximum value among all range of values', () => {
      const matrix = [[-7, 12], [-2, 4]];
      expect(max(matrix)).toBe(12);
    });

    it('finds the maximum value among negative range of values', () => {
      const matrix = [[-2, -22, -5], [-7, -12, -8]];
      expect(max(matrix)).toBe(-2);
    });
  });

  describe('min', () => {
    it('finds the minimum value among all range of values', () => {
      const matrix = [[-7, 12], [-2, 4]];
      expect(min(matrix)).toBe(-7);
    });

    it('finds the minimum value among negative range of values', () => {
      const matrix = [[-2, -22, -5], [-7, -12, -8]];
      expect(min(matrix)).toBe(-22);
    });
  });

  describe('magicSquare', () => {
    const aMagicSquare = () => [
      [8, 3, 4],
      [1, 5, 9],
      [6, 7, 2]
    ];
    it('returns true for magic squares', () => {
      expect(isMagicSquare(aMagicSquare())).toBe(true);
    });

    it('returns false for magic squares that defers in the secondary diagonal', () => {
      const square = [
        [1, 2, 2],
        [2, 2, 1],
        [2, 1, 2]
      ];
      expect(isMagicSquare(square)).toBe(false);
    });

    it('returns false for magic squares that defers in one of the columns', () => {
      const square = [
        [2, 2, 1],
        [2, 2, 1],
        [2, 1, 2]
      ];
      expect(isMagicSquare(square)).toBe(false);
    });
  });
});
