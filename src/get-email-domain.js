const { NotImplementedError } = require('../lib');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  // Find the index of '@'
  const atIndex = email.indexOf('@');

  // Return the substring after '@'
  if (atIndex !== -1) {
    return email.slice(atIndex + 1);
  }
  // If '@' not found, return empty string or handle error as needed
  return '';
}

module.exports = {
  getEmailDomain
};
