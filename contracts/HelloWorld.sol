// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.8.12 <0.9.0;

import "./Ownable.sol";

/**
 * @title
 */
contract HelloWorld is Ownable {
    function print() pure external returns(string memory) {
        return 'Hello World';
    }
}
