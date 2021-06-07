//These are standard modules, so no need 
const path = require('path');
const fs = require('fs');
const solc = require('solc');

//Create  a pth that ensures that code works on either windows or Linux systems
const inboxPath = path.resolve(__dirname, 'contracts', 'inbox.sol');

//Create a source variable, call fs and read the inboxPath with utf8 encoding
const source = fs.readFileSync(inboxPath, 'utf8');

console.log(solc.compile(source, 1));