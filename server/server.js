// * [/server.js] - entry point to the app

// * require express.js
const express = require("express");

// * create the express app
const app = express();

// * set the port we're listening on
const PORT = 8080;

// * create a home web route
app.get("/", (req, res) => {
    res.send("Hello world");
});

// * Set up listening for connections
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
