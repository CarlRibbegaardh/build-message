
/**
 * @param {string} text
 * @param {number} count
 */
 function repeatString(text, count) {
    return new Array(count + 1).join(text);
  }
  
  module.exports = repeatString;