// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "./lib/ERC721Tradable.sol";


contract Helheimr is ERC721Tradable {
    constructor(address _proxyRegistryAddress)
        ERC721Tradable("Helheimr", "HMR", _proxyRegistryAddress)
    {}

    function baseTokenURI() override public pure returns (string memory) {
        return "https://helheimr.herokuapp.com/token/";
    }

    function contractURI() public pure returns (string memory) {
        return "https://helheimr.herokuapp.com/contract";
    }
}
