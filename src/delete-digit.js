const { NotImplementedError } = require('../lib');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const strNum = n.toString();
  let maxNumber = 0;

  for (let i = 0; i < strNum.length; i++) {
    // Remove the digit at position i
    const newNumberStr = strNum.slice(0, i) + strNum.slice(i + 1);
    const newNumber = parseInt(newNumberStr, 10);
    if (newNumber > maxNumber) {
      maxNumber = newNumber;
    }
  }

  return maxNumber;
}

module.exports = {
  deleteDigit
};
