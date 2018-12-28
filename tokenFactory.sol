pragma solidity ^0.4.24;

import "./ERC20.sol";

contract FractalToken is ERC20 {
  string public name;
  string public symbol;
  uint8 public decimals = 0;
  uint public INITIAL_SUPPLY;
  address public authorAddress;

  bool coinPrevioslyMinted = false;

  function FractalToken() public{
    authorAddress = msg.sender;
  }


  function initializeCoin(string _name, string _symbol, uint _supply ) public {
    require((msg.sender == authorAddress) && (coinPrevioslyMinted == false));

    name = _name;
    symbol = _symbol;
    INITIAL_SUPPLY = _supply;

    _mint(msg.sender, INITIAL_SUPPLY);
    coinPrevioslyMinted = true;
  }

}
