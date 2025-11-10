const { NotImplementedError } = require('../lib');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 *
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 *
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(disksNumber, turnsSpeed) {
  const turns = Math.pow(2, disksNumber) - 1; // minimum moves
  const turnsPerSecond = turnsSpeed / 3600; // convert turns/hour to turns/second
  const seconds = Math.floor(turns / turnsPerSecond);
  return { turns, seconds };
}

module.exports = {
  calculateHanoi
};
