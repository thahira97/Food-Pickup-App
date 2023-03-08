const express = require("express");
const router = express.Router();
const { getSummary } = require("../db/queries/ord-sum");


router.get("/", (req, res) => {
  const clientId = req.cookies.userId;
  getSummary()
    .then((response) => {
      res.render("order-summary", { dishes: response.rows, clientId: clientId });
    })
    .catch((err) => {
      res.status(500);
    });
});

module.exports = router;
