// * [/server.js] - entry point to the app

// * require express.js
const express = require("express");

// * create the express app
const app = express();

// * set the port we're listening on
const PORT = 8080;

// * Set up listening for connections
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
