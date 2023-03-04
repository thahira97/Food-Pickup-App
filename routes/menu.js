const express = require('express');
const router  = express.Router();

router.get('/', (req, res) => {
  console.log("RES",req.cookies.userId);
  if (!req.cookies.userId) {
    return res.status(401).send("Please log in to place an order");
  }
  res.render('menu');
});

module.exports = router;
