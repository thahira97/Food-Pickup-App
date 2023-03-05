const db = require('../connection');

const getMenu = () => {
  return db.query('SELECT * FROM dishes;')
};

const addOrderList = () => {
  
}
module.exports = { getMenu };
