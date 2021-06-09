const assert = require('assert');
const ganache = require('ganache-cli');
//Web3 is upper case because it's a constructor, while the instance is lower case
const Web3 = require('web3');
//Create instance of web3 that connects to ganache as a provider
const web3 = new Web3(ganache.provider());
const {interface, bytecode} = require('../compile');

let accounts;
let inbox;
const INITIALSTR = 'Hola'


beforeEach(async()=>{
//Get list of all accounts on Ganashe network using Web 3 library
accounts = await web3.eth.getAccounts();
//await means that the statement will wait until this line is completed

//Use one of the accounts to deploy the contract:
inbox= await new web3.eth.Contract(JSON.parse(interface))
.deploy({data:bytecode, arguments: [INITIALSTR]})
.send({from: accounts[0], gas: '1000000'});
});

describe('Inbox', ()=>{
it('deploys a contract', ()=>{
    assert.ok(inbox.options.address);
    });

it(' has a default message', async ()=>{
const message = await inbox.methods.message().call();
assert.strictEqual(message, INITIALSTR);      
});
it('can change the message', async ()=>{
 //After calling setMessage the rest transaction needs to be called onto the network
   await inbox.methods.setMessage('The end') .send({ from: accounts[0]});
const message = await inbox.methods.message().call();
assert.strictEqual(message, 'The end')
});
});

//https://rinkeby.infura.io/v3/409c675de5164908b7b8dffe9573dca8



//Web3 versioning: At the moment this is the end all solution for communicating between a JS and solidity code
//Version 0 and 1 are significantly different. 0 only supports async code
//Version 1 supports promises + async/await