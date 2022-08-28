/**
 * @param {number} terminalWidth
 * @param {number} messageWidth
 */
function getMessagePrefixWidth(terminalWidth, messageWidth) {
  const remainingWidth = terminalWidth - messageWidth;
  let messagePrefixWidth = 4;
  
  if (0 == remainingWidth) {
    messagePrefixWidth = 0;
  } else {
    const halfRemainingWidth = Math.ceil(remainingWidth / 2);
    if (halfRemainingWidth < messagePrefixWidth) {
      messagePrefixWidth = halfRemainingWidth;
    }
  }

  return messagePrefixWidth;
}

module.exports = getMessagePrefixWidth;