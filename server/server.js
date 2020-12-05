// * [/server.js] - entry point to the app

// * require express.js
const express = require("express");

// * create the express app
const app = express();

// * add cors to the app
const cors = require("cors");
app.use(cors());

// * set the port we're listening on
const PORT = 8080;

// * setup API routes
const api_routes = require("./routes/api");
app.use("/api/", api_routes);

// * setup web routes
// * NOTE - INCLUDE FINAL CATCH ALL THAT RETURNS 404 HTML
const web_routes = require("./routes/web");
app.use("/", web_routes);

// * Set up listening for connections
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});

// * graceful shutdown example
process.on('SIGTERM', () => {
    debug('SIGTERM signal received: closing HTTP server')
    server.close(() => {
      debug('HTTP server closed')
    })
  })