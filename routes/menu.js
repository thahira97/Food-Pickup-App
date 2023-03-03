const express = require("express");
const router = express.Router();
const {getMenu} = require("../db/queries/menu");

router.get("/", (req, res) => {
  getMenu()
    .then((response) => {
      res.render("menu", {dishes : response.rows});
  })
     .catch(err => {
        res.status(500)
     })
});
module.exports = router;
