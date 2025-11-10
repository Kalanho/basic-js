const { NotImplementedError } = require('../lib');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */

function encodeLine(str) {
  if (typeof str !== 'string') {
    return '';
  }

  let result = '';
  let count = 1;
  let prevChar = str[0];

  for (let i = 1; i < str.length; i++) {
    const currentChar = str[i];
    if (currentChar === prevChar) {
      count++;
    } else {
      // Append the count and character
      result += (count > 1 ? count : '') + prevChar;
      prevChar = currentChar;
      count = 1;
    }
  }

  // Append the last sequence
  result += (count > 1 ? count : '') + prevChar;

  return result;
}
module.exports = {
  encodeLine
};
