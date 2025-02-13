const express = require("express");
const bodyParser = require("body-parser");
const ticketRoutes = require("./routes/ticketRoutes");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use("/api/tickets", ticketRoutes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

