const assert = require('assert');
const ganache = require('ganache-cli');
//Web3 is upper case because it's a constructor, while the instance is lower case
const Web3 = require('web3');
//Create instance of web3 that connects to ganache as a provider
const web3 = new Web3(ganache.provider());


class Car{
    park(){
        return 'stopped';
    }
    drive(){
        return 'vroom';
    }  
}
let car;
//Used 'let' because we want to change the value of car. Const means you don't change
beforeEach(()=>{
car = new Car();

});


describe('Car', ()=>{
//Create a new instance of car: 
it('can park is a string', ()=>{
  assert.strictEqual(car.park(), 'stopped')
    });

it('can drive', ()=>{
   assert.strictEqual(car.drive(), 'vroom')
})

});

//Web3 versioning: At the moment this is the end all solution for communicating between a JS and solidity code
//Version 0 and 1 are significantly different. 0 only supports async code
//Version 1 supports promises + async/await