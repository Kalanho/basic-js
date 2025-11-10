const { NotImplementedError } = require('../lib');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(inputString) {
  if (typeof inputString !== 'string') {
    return false;
  }
  
  // Split by hyphens
  const parts = inputString.split('-');
  
  // Check if we have exactly 6 parts
  if (parts.length !== 6) {
    return false;
  }
  
  // Check each part
  for (let part of parts) {
    // Each part should be exactly 2 characters
    if (part.length !== 2) {
      return false;
    }
    
    // Each character should be a valid hexadecimal digit
    if (!/^[0-9A-F]{2}$/.test(part)) {
      return false;
    }
  }
  
  return true;
}

module.exports = {
  isMAC48Address
};
