const express = require('express');
const router  = express.Router();

router.get('/', (req, res) => {
  res.render('order-summary');
});

module.exports = router;
