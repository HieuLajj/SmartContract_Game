// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
contract GamePlay{
    address payable public owner;
    IERC20 public tokenXU;
    address[] public stakerAddressList;
    uint public amount = 100*10**18;
    struct Data {  
        uint amountTokenGuess;  
        uint guess;  
        uint gameRound;
    }

    mapping(address => Data[]) public playerBet;

    constructor(address _token){
        owner = payable(msg.sender);
        tokenXU = IERC20(_token);
    }

    function bet(uint _amountTokenGuess, uint _guess, uint _gameRound) public{
        require(tokenXU.allowance(msg.sender, address(this))>= _amountTokenGuess,"Please approve token");
        require(tokenXU.balanceOf(msg.sender)>= _amountTokenGuess, "Sorry you dont have eought token");
        tokenXU.transferFrom(msg.sender, address(this), _amountTokenGuess);
        // playerBet[msg.sender] = Data(_amountTokenGuess, _guess, _gameRound);
        // stakerAddressList.push(msg.sender);
        playerBet[msg.sender].push(Data(_amountTokenGuess, _guess, _gameRound));
        if(!checkAddress(msg.sender)){
            stakerAddressList.push(msg.sender);
        }
    }

    function checkAddress(address _addressToCheck) public view returns (bool) {
        for (uint i = 0; i < stakerAddressList.length; i++) {
            if (stakerAddressList[i] == _addressToCheck) {
                return true;
            }
        }
        return false;
    }

    event Hoantien(address buyer, uint256 amount);
    event Congtien(address buyer, uint256 amount);

    event SMdataBetNumber(uint betNumber);
    
    function play(uint _gameRound) public{
        uint randomResult = uint(keccak256(abi.encodePacked(block.timestamp, block.difficulty))) % 2;
        emit SMdataBetNumber(randomResult);
        for(uint256 i = 0; i < stakerAddressList.length; i++){
            for(uint256 j = 0; j < playerBet[stakerAddressList[i]].length; j++){
                 if(playerBet[stakerAddressList[i]][j].gameRound != _gameRound){
                    tokenXU.transfer(stakerAddressList[i], playerBet[stakerAddressList[i]][j].amountTokenGuess);
                    emit Hoantien(stakerAddressList[i],playerBet[stakerAddressList[i]][j].amountTokenGuess);
                } else if(playerBet[stakerAddressList[i]][j].guess == randomResult){
                    tokenXU.transfer(stakerAddressList[i], playerBet[stakerAddressList[i]][j].amountTokenGuess * 2);
                    emit Congtien(stakerAddressList[i],playerBet[stakerAddressList[i]][j].amountTokenGuess*2);
                }
            }
            delete playerBet[stakerAddressList[i]];
        }
        delete stakerAddressList;
    }
 
}