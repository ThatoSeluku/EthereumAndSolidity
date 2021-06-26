import logo from './logo.svg';
import './App.css';
import lottery from './lottery';
import web3 from './web3';
import React, { Component } from 'react'


class App extends Component {
  //web3.eth.getAccounts().then(console.log);
state= {
  manager: '',
  players:[],
  balance: '',
  value: '',
  message:''
};
  
  async componentDidMount(){
    const manager = await lottery.methods.manager().call();
    const players = await lottery.methods.getPlayers().call();
    const balance = await web3.eth.getBalance(lottery.options.address);
    this.setState({manager, players, balance});
  }

onSubmit= async (event) =>{
event.preventDefault();
//Get list of _accounts
const accounts = await web3.eth.getAccounts();
this.setState({message: 'Waiting on transaction to complete...'})

await lottery.methods.enter().send({
  from: accounts[0],
  value: web3.utils.toWei(this.state.value, 'ether')
})


this.setState({message: 'You have been entered!'})
}

onClick= async() =>{
const accounts = await web3.eth.getAccounts();

this.setState({message: 'Wait a sec... Randomly picking winner'});
await lottery.methods.pickWinner().send({
  from: accounts[0]
})
this.setState({message: 'A winner is selected!'})
};

 render(){
  return (
  
  <div>
    <h2>Lottery Contract</h2>
    <p>This contract is managed by {this.state.manager}</p>
   
<p>There are currently {this.state.players.length} players in this raffle and you stand a chance to win {web3.utils.fromWei(this.state.balance, 'ether')} ether!</p>

<hr />
<form onSubmit={this.onSubmit}>
  <h4>Want to try your luck?</h4>
  <div>
    <label>Amount of ether to enter</label>
    <input
    value= {this.state.value}
    onChange={event => this.setState({value: event.target.value})}
    />
  </div>
  <button>Enter!</button>
  </form>
  <hr />
<h4>Select The Lottery Winner?</h4>
<button onClick={this.onClick}>Pick Your Winner!</button>
<hr />
  <h1>{this.state.message}</h1>
</div>



  );
}
}
export default App;
