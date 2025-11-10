const { NotImplementedError } = require('../lib');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const nameCounts = {};
  const result = [];

  for (const name of names) {
    if (!nameCounts.hasOwnProperty(name)) {
      // Name not used before
      nameCounts[name] = 0;
      result.push(name);
    } else {
      // Name already used, find next available suffix
      nameCounts[name] += 1;
      let newName = `${name}(${nameCounts[name]})`;

      // If newName already exists, keep incrementing
      while (nameCounts.hasOwnProperty(newName)) {
        nameCounts[name] += 1;
        newName = `${name}(${nameCounts[name]})`;
      }

      // Mark newName as used
      nameCounts[newName] = 0;
      result.push(newName);
    }
  }

  return result;
}

module.exports = {
  renameFiles
};
