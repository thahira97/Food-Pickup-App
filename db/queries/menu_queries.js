const db = require('../connection');

const getMenu = () => {
  return db.query('SELECT * FROM dishes;')
};

const addOrderListToDB = (client_id) => {
  return db
     .query(`

     BEGIN;

     WITH inserted_row AS (

     INSERT INTO orders (client_id, order_placed)
     VALUES (6, NOW())
     RETURNING id
     )
     INSERT INTO order_dishes ( order_id, dish_id, quantity)
         VALUES ((SELECT id FROM inserted_row), 4, 5);

     COMMIT;`)

}

module.exports = { getMenu, addOrderListToDB };
