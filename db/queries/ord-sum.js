const db = require("../connection");

const getSummary = () => {
  console.log("database query");
  return db.query(`
  SELECT orders.id, dishes.title, dishes.price, dishes.image_url, quantity
  FROM orders
  JOIN order_dishes ON order_id = orders.id
  JOIN dishes ON dishes.id = dish_id
  WHERE orders.id = (SELECT MAX(id) FROM orders);
  `);

};

module.exports = { getSummary };
