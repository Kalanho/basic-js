const { NotImplementedError } = require('../lib');

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  // Check if the input is an array
  if (!Array.isArray(members)) {
    return false;
  }

  // Filter out non-string members
  const filteredMembers = members.filter(member => typeof member === 'string');

  // Check if the array contains at least two members
  if (filteredMembers.length < 2) {
    return false;
  }

  // Sort the members alphabetically
  const sortedMembers = filteredMembers.sort();

  // Create the team name by taking the first letter of each member
  const teamName = sortedMembers.map(member => member[0]).join('');

  return teamName;
}


module.exports = {
  createDreamTeam
};
