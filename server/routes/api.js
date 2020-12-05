// * [routes/api.js] - define api routes here

const express = require("express");
const router = express.Router();

// * get database
const db = require("./../db/database");

// app.method(path, handler);

// * GET requests
// app.get(ROUTE, (req, res) => { res.send(...) });

// * create a home web route
router.get("/", (req, res) => {
    res.send("API Home!");
});

// note - USER IDS start at 10000001
// * get user details
router.get("/users/:user_id", (req, res) => {
  db.runQuery(`SELECT * FROM users WHERE user_id=${req.params.user_id}`, function (rows, fields) {
    // TODO - handle empty data return
    // * only one is returned, so return the object not the array
      res.send(rows[0]);
  });
});

// * POST requests
// app.post(ROUTE, (req, res) => { res.send(...) });

// * PUT requests
// app.put(ROUTE, (req, res) => { res.send(...) });

// * DELETE requests
// app.delete(ROUTE, (req, res) => { res.send(...) });

// * 404 - no matching routes found
router.use(function (req, res, next) {
    res.status(404).send('API route not found');
  });

module.exports = router;