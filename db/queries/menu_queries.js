const db = require('../connection');

const getMenu = () => {
  return db.query('SELECT * FROM dishes;')
};

const addOrderListToDB = (client_id) => {
  return db
     .query(`INSERT INTO orders (
    client_id,
    order_placed
  ) VALUES ($1, NOW());`, [9])

}

module.exports = { getMenu, addOrderListToDB };
