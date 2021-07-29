import Web3 from 'web3';

let web3;  
//Check if code is being executed in browser and MetaMask is being used
if(typeof window !== 'undefined'&&typeof  window.ethereum !== 'undefined')
{
    //!==undefined then it's running in browser
window.ethereum.request({ method: "eth_requestAccounts"});
    web3 = new Web3(window.ethereum);
}else{
// We are on server or user is not running metamask
const provider = new Web3.providers.HttpProvider(
    "https://rinkeby.infura.io/v3/409c675de5164908b7b8dffe9573dca8"
    );
web3 = new Web3(provider);
}

export default web3;