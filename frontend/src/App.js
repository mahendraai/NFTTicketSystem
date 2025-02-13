import React, { useState } from "react";
import TicketMintingForm from "./components/TicketMintingForm";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>NFT Ticketing System</h1>
      <TicketMintingForm />
    </div>
  );
}

export default App;
