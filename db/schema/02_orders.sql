DROP TABLE IF EXISTS orders CASCADE;
CREATE TABLE orders (
  id SERIAL PRIMARY KEY NOT NULL,
  client_id INTEGER REFERENCES clients(id) ON DELETE CASCADE,
  order_placed TIMESTAMP,
  order_approved TIMESTAMP,
  order_completed TIMESTAMP,
  estimated_time smallINT,
  order_status BOOLEAN
);
