const express = require("express");
const router = express.Router();
const checkUserEmail = require("../db/login-database");

router.post("/", (req, res) => {
  console.log(req.body.email);
  if (!req.body.email) {
    res.status(401).send("Authorization Error");
  } else {
    checkUserEmail(req.body.email)
      .then((result) => {
        const userEmail = result.rows[0].email;
        const userId = result.rows[0].id;
        // res.clearCookie("userId");

        if (userEmail === "maestro@gmail.com") {
          res.cookie("userId", userId);
          res.redirect("/orders");
        } else {
          res.cookie("userId", userId);
          res.redirect("/menu");
        }
      })
      .catch((error) => {
        console.error(error);
        res.status(500).send("Error while checking user email");
      });
  }
});

module.exports = router;
