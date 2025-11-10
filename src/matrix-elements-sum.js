const { NotImplementedError } = require('../lib');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  if (!matrix || matrix.length === 0 || matrix[0].length === 0) {
    return 0;
  }

  const rows = matrix.length;
  const cols = matrix[0].length;
  let sum = 0;

  // Process column by column
  for (let col = 0; col < cols; col++) {
    for (let row = 0; row < rows; row++) {
      // If we encounter a zero, all values below it in this column should be skipped
      if (matrix[row][col] === 0) {
        // Skip the rest of this column
        break;
      }
      sum += matrix[row][col];
    }
  }

  return sum;
}


module.exports = {
  getMatrixElementsSum
};
