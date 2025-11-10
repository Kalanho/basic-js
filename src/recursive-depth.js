const { NotImplementedError } = require('../lib');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates depth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    // Base case: if it's not an array, depth is 0
    if (!Array.isArray(arr)) {
      return 0;
    }
    
    // If array is empty, depth is 1 (the array itself)
    if (arr.length === 0) {
      return 1;
    }
    
    // Calculate depth for each element and find the maximum
    const depths = arr.map(item => this.calculateDepth(item));
    const maxChildDepth = Math.max(...depths);
    
    // Current array adds 1 to the depth
    return 1 + maxChildDepth;
  }
}

module.exports = {
  depthCalculator: new DepthCalculator(),
};
