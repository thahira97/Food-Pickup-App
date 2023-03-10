const twilio = require('twilio');
require('dotenv').config();

const accountSid = process.env.TWILIO_ACCOUNT_SID // Your Account SID from www.twilio.com/console
const authToken = process.env.TWILIO_AUTH_TOKEN; // Your Auth Token from www.twilio.com/console

const client = require('twilio')(accountSid, authToken);


const orderPlaced = function() {
  client.messages
  .create({
    body: 'Hi there! A new order has been placed🍕🍕',
    to: process.env.RESTAURANT_PH_NUM, // Text this number
    from: process.env.TWILLIO_PH_NUM, // From a valid Twilio number
  })
  .then((message) => console.log(message.sid));
};

const orderCreated = function(estimated_time) {
  client.messages
  .create({
    body: `Hi,Your order is being prepared.It will take ${estimated_time} minutes.`,
    to: process.env.CLIENT_PH_NUM, // Text this number
    from: process.env.TWILLIO_PH_NUM, // From a valid Twilio number
  })
    .then((message) => console.log(message.sid))
    .catch(error => {
      console.log(error);
    })
};


const orderReady = function(order_id) {
  client.messages
  .create({
    body: `Your order id is ${order_id} and is ready for pick up.Enjoy your food!❤️`,
    to: process.env.CLIENT_PH_NUM, // Text this number
    from: process.env.TWILLIO_PH_NUM, // From a valid Twilio number
  })
  .then((message) => console.log(message.sid));
};

module.exports = {orderReady, orderCreated, orderPlaced};
