const express = require("express");
const router = express.Router();
const checkUserEmail = require("../db/login-database");

router.post("/", (req, res) => {
  console.log(req.body.email);
  checkUserEmail(req.body.email).then((result) => {
    console.log("result from db", result.rows[0]);
    const userId = result.rows[0].id;
    const userEmail = result.rows[0].email;

    // res.clearCookie("userId");

    console.log("is it same", userEmail === "maestro@gmail.com");

    // res.redirect(301,"/orders")
    if (userEmail === "maestro@gmail.com") {
      console.log("sdfsdfsdasss", result.rows[0].email);
      res.cookie("userId", userId);
      res.redirect("/orders");
    } else {
      res.cookie("userId", userId);
      console.log("reasasss", result.rows[0].email);
      res.redirect("/menu");
    }
  });
  // .catch(error => {

  //   console.error(error);
  //   res.status(500).send("Error while checking user email");
  // });
});

module.exports = router;
