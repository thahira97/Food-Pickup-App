const db = require('../connection');

const getMenu = () => {
  return db.query('SELECT * FROM dishes;')
};

module.exports = { getMenu };
