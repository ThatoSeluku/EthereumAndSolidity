pragma solidity ^0.4.17;
//Specify solidity version. pragma is a version identifier
//Contract is keyword that behaves similar to classes in js, java, python etc:
contract Inbox{
    //Create a public variable called message
    string public message;

//Create Inbox constructor function: These are autocalled everytime contract is deployed    
    function Inbox(string initMessage)public{
        message = initMessage;
    }
    
    function setMessage(string newMessage)public {
        message = newMessage;
    }
    function getMessage()public view returns(string){
        return message;
    }
}

/*
Sidenotes:
Global variables persist and stay on the ethereum network
while local variables are often used once only then discarded
constant/ view keyword: disallows modifications of data in a function 
pure: No modification or access of contract's data
payable: Whenever function calls a function, we allow them to send ether along
*/