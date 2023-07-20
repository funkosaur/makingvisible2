const express = require("express");
const cors = require("cors");

const app = express();
const port = 3000;

// Enable CORS
app.use(cors());

// Serve static files from the 'build' folder
app.use(express.static("build"));

// Define additional routes or middleware if needed

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
