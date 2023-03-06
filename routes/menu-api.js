const express = require('express');
const router  = express.Router();
const menuQueries = require('../db/queries/menu_queries');

router.post('/', (req, res) => {
  menuQueries.addOrderList()
  .then((result) => {
    return result.rows[0]
  })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

module.exports = router;
