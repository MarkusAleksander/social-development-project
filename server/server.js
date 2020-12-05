// * [/server.js] - entry point to the app

require("dotenv").config();

// * require express.js
const express = require("express");

// * create the express app
const app = express();

// * add cors to the app
const cors = require("cors");
app.use(cors());

// * set the port we're listening on
const PORT = 8080;

// * set up and open the database
const db = require("./db/database");
db.setupConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_DATABASE
});
db.openConnection();

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
    db.closeConnection();
    server.close(() => {
      debug('HTTP server closed')
    })
  })