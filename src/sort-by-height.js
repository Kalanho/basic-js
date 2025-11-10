const { NotImplementedError } = require('../lib');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  // Extract all non -1 values and sort them
  const sortedHeights = arr.filter(height => height !== -1).sort((a, b) => a - b);
  
  // Create result array
  const result = [];
  let sortedIndex = 0;
  
  // Rebuild the array, placing sorted numbers where there aren't -1 values
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) {
      result.push(-1);
    } else {
      result.push(sortedHeights[sortedIndex]);
      sortedIndex++;
    }
  }
  
  return result;
}

module.exports = {
  sortByHeight
};
