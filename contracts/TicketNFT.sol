
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract TicketNFT is ERC721URIStorage, Ownable {
    uint public ticketCounter;

    constructor() ERC721("TicketNFT", "TNFT") {}

    function mintTicket(address to, uint eventId, string memory metadataUri) public onlyOwner {
        ticketCounter++;
        uint ticketId = ticketCounter;
        _safeMint(to, ticketId);
        _setTokenURI(ticketId, metadataUri);
    }
}
