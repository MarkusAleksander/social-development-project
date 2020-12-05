// * [routes/web.js] - Define web routes here

const express = require("express");
const router = express.Router();
const path = require("path");

// * get path to views
const views_path = path.join(__dirname, "/../views");

// app.method(path, handler);

// * GET requests
// app.get(ROUTE, (req, res) => { res.send(...) });

// * create a home web route
router.get("/", (req, res) => {
    res.send("Home!");
});

// * POST requests
// app.post(ROUTE, (req, res) => { res.send(...) });

// * PUT requests
// app.put(ROUTE, (req, res) => { res.send(...) });

// * DELETE requests
// app.delete(ROUTE, (req, res) => { res.send(...) });

// * 404 - no matching routes found
router.use(function (req, res, next) {
    res.status(404).sendFile(`${views_path}/404.html`);
  });

module.exports = router;