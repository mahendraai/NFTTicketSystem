import React, { useState } from "react";
import { ethers } from "ethers";
import TicketService from "../TicketService";

const TicketMintingForm = () => {
  const [userAddress, setUserAddress] = useState("");
  const [eventId, setEventId] = useState("");
  const [metadataUri, setMetadataUri] = useState("");

  const mintTicket = async () => {
    try {
      const response = await TicketService.mintTicket(userAddress, eventId, metadataUri);
      alert("Ticket minted successfully!");
    } catch (error) {
      alert("Error minting ticket: " + error.message);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="User Address"
        value={userAddress}
        onChange={(e) => setUserAddress(e.target.value)}
      />
      <input
        type="text"
        placeholder="Event ID"
        value={eventId}
        onChange={(e) => setEventId(e.target.value)}
      />
      <input
        type="text"
        placeholder="Metadata URI"
        value={metadataUri}
        onChange={(e) => setMetadataUri(e.target.value)}
      />
      <button onClick={mintTicket}>Mint Ticket</button>
    </div>
  );
};

export default TicketMintingForm;

