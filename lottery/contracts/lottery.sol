//Specify solidity version. pragma is a version identifier
pragma solidity ^0.4.17;

contract Lottery{
    address public manager;
    address[] public players;

    function Lottery() public {
    manager =msg.sender;
    }
    function enter() public payable{
    //Users need to enter an amount of ether in order to use the application
     require(msg.value>2 ether);
        players.push(msg.sender);
    }
    //Random number function is pseudo and needs more work in order to be truly random
    function random() private view returns (uint256){
    return uint(keccak256(block.difficulty, now, players));
    } 
    
    function pickWinner() public retstricted {
        uint index = random() % players.length;
        //All our ether is being sent to the particular address
        players[index].transfer(this.balance);
        //Reset player array using dynamic array of type address
        players = new address[](0);
    }
    
    
    
    //Function modifiers are a means for us to write less code
    modifier retstricted() {
        //Ensure nobody but the manager can call pickWinner function seeing that it too is marked retstricted
        require(msg.sender == manager);
        _;
    }
    function getPlayers() public view returns (address[]){
       return players; 
    }
}
