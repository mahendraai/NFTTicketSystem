import axios from "axios";

const API_URL = "http://localhost:5000/api/tickets";

const mintTicket = async (userAddress, eventId, metadataUri) => {
  const response = await axios.post(`${API_URL}/mint`, {
    userAddress,
    eventId,
    metadataUri,
  });
  return response.data;
};

export default { mintTicket };
