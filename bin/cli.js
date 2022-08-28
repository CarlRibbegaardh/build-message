#!/usr/bin/env node

const pkg = require('../package.json')
const program = require('commander')
const getTerminalWidth = require("../lib/getTerminalWidth");
const splitMessageForWidth = require("../lib/splitMessageForWidth");
const getMaxMessageWidth = require("../lib/getMaxMessageWidth");
const getMessagePrefixWidth = require("../lib/getMessagePrefixWidth");
const repeatString = require("../lib/repeatString");

program
  .version(pkg.version, '-v, --version')
  .description(pkg.description)
  .usage(`<message>`)

const help = `
Examples : 

$ build-message building main
---------------------
    building main
---------------------

$ build-message debug build
-------------------
    debug build
-------------------
`;

program.on('--help', () => {
  console.log(help);
})

program.parse(process.argv);
const args = program.args;

if (!args.length) {
  program.outputHelp();
  process.exit(1);
} else {

  // Calculate and adjust
  let terminalWidth = getTerminalWidth();

  const message = args.join(" ");
  const messages = splitMessageForWidth(message, terminalWidth);
  let messageWidth = getMaxMessageWidth(messages);
  let messagePrefixWidth = getMessagePrefixWidth(terminalWidth, messageWidth);

  const bannerWidth = messageWidth + messagePrefixWidth * 2;
  
  var bannerLine = repeatString("-", bannerWidth);
  var messagePrefix = repeatString(" ", messagePrefixWidth);
  
  // Do the magic
  console.log(bannerLine);

  for (let index = 0; index < messages.length; index++) {
    console.log(messagePrefix + messages[index]);
  }
  
  console.log(bannerLine);
}
