const { NotImplementedError } = require('../lib');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  const result = [];
  const discardNext = []; // Track indices to discard due to --discard-next

  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];
    
    // Skip if this element was marked for discarding
    if (discardNext.includes(i)) {
      continue;
    }

    switch (current) {
      case '--discard-next':
        // Mark the next element for discarding (if it exists)
        if (i + 1 < arr.length) {
          discardNext.push(i + 1);
        }
        break;

      case '--discard-prev':
        // Remove the previous element from result (if it exists and wasn't discarded)
        if (result.length > 0 && !discardNext.includes(i - 1)) {
          result.pop();
        }
        break;

      case '--double-next':
        // Duplicate the next element (if it exists and isn't a control sequence)
        if (i + 1 < arr.length && 
            !['--discard-next', '--discard-prev', '--double-next', '--double-prev'].includes(arr[i + 1])) {
          result.push(arr[i + 1]);
        }
        break;

      case '--double-prev':
        // Duplicate the previous element (if it exists and wasn't discarded)
        if (i - 1 >= 0 && !discardNext.includes(i - 1)) {
          result.push(result[result.length - 1]);
        }
        break;

      default:
        // Regular element - add to result
        result.push(current);
        break;
    }
  }

  return result;
}

module.exports = {
  transform
};
