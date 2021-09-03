// index.js
const express = require("express");
const router = require("./router");
var cors = require('cors')
const PORT = 8080;
const app = express();

 
app.use(cors())
// Apply JSON parsing middleware
app.use(express.json());
// Apply router
app.use("/", router);
// Serving app on defined PORT
app.listen(PORT, () => {
  console.log(`Express is running on port ${PORT}`);
});
