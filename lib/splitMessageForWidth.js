/**
 * @param {string} message
 * @param {number} terminalWidth
 */
function splitMessageForWidth(message, terminalWidth) {
  const messages = [message];

  while (terminalWidth < messages[messages.length-1].length) {
    const msg = messages[messages.length-1];

    // If there's a space, we split at the space
    const splitPos = msg.lastIndexOf(" ", terminalWidth);
    if(0 < splitPos) {
      messages[messages.length-1] = msg.substring(0, splitPos);
      messages[messages.length] = msg.substring(splitPos+1);
    } else {
      // Otherwise just split at terminalwidth
      messages[messages.length-1] = msg.substring(0, terminalWidth);
      messages[messages.length] = msg.substring(terminalWidth+1);
    }
  }

  return messages;
}

module.exports = splitMessageForWidth;