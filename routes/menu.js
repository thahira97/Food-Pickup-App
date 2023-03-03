const express = require("express");
const router = express.Router();
const db = require("../db/connection");

router.get("/", (req, res) => {
  db
   .query(`SELECT * FROM dishes;`)
   .then((response) => {
    console.log(response.rows)
    res.render("menu", {dishes : response.rows});
  });
});

module.exports = router;
