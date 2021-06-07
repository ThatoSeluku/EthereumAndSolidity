//Specify solidity version. pragma is a version identifier
pragma solidity ^0.4.17;

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
    

}

/*
Sidenotes:
Global variables persist and stay on the ethereum network
while local variables are often used once only then discarded
*/