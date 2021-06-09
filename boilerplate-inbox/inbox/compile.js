// @ts-ignore
const path = require('path');
const fs = require('fs');
const solc = require('solc');

//Read in the contents of the inbox.sol
const inboxPath = path.resolve(__dirname, 'contracts', 'Inbox.sol');
const source = fs.readFileSync(inboxPath, 'utf8');

//Make sure you require compile file and get access to source code from inbox.sol
module.exports = solc.compile(source, 1).contracts[':Inbox'];

