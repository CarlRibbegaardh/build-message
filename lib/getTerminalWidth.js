function getTerminalWidth() {
  const defaultWidth = 80;
  let terminalWidth = process.stdout.columns || defaultWidth;

  // Better safe than sorry
  if(terminalWidth < 0) {
    terminalWidth = 1
  }

  return terminalWidth;
}

module.exports = getTerminalWidth;