/**
 * @param {string[]} messages
 */
function getMaxMessageWidth(messages) {
  let messageWidth = 1;

  for (let index = 0; index < messages.length; index++) {
    if(messageWidth < messages[index].length) {
      messageWidth = messages[index].length;
    }
  }

  return messageWidth;
}

module.exports = getMaxMessageWidth;