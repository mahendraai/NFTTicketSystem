const Web3 = require("web3");
const TicketNFT = require("../contracts/TicketNFT.json");
const web3 = new Web3(new Web3.providers.HttpProvider(process.env.INFURA_URL));

const mintTicket = async (req, res) => {
  try {
    const { userAddress, eventId, metadataUri } = req.body;

    const accounts = await web3.eth.getAccounts();
    const contract = new web3.eth.Contract(TicketNFT.abi, process.env.CONTRACT_ADDRESS);

    const receipt = await contract.methods
      .mintTicket(userAddress, eventId, metadataUri)
      .send({ from: accounts[0] });

    res.status(200).json({ success: true, transactionReceipt: receipt });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = { mintTicket };

