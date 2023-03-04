// Client facing scripts here

$(document).ready(function () {
  //OrderList where order item to be pushed

  let orderList = [];

  ///Function to add orderItem to the orderlist
  const addOrderItem = function (orderList, orderItem) {
    if (orderList.length === 0) {
      orderList.push({
        title: orderItem.title,
        quantity: orderItem.quantity,
        price: orderItem.price * orderItem.quantity,
      });
      // orderList.push(orderItem);
      return;
    } else {
      for (const item of orderList) {
        if (item.title === orderItem.title) {
          item.quantity += orderItem.quantity;
          item.price = item.price + orderItem.price * orderItem.quantity;
          return;
        }
      }
      orderList.push({
        title: orderItem.title,
        quantity: orderItem.quantity,
        price: orderItem.price * orderItem.quantity,
      });
    }
  };

  ////For increment button
  $(".increment").click(function () {
    const input = $(this).siblings("input");
    let currentValue = parseInt(input.val());
    let newValue = currentValue + 1;
    input.val(newValue);
    // console.log(input.val())
  });

  ////For decrement button
  $(".decrement").click(function () {
    const input = $(this).siblings("input");
    let currentValue = parseInt(input.val());
    if (currentValue >= 2) {
      let newValue = currentValue - 1;
      input.val(newValue);
    }
  });

  ////Add to order button
  $(".add-order-btn").click(function () {
    const $quantity = Number(
      $(this).siblings().children().find("#quantity").val()
    );

    const $title = $(this).parent().parent().find("#dish-title").text();

    const $price = Number($(this).parent().find("#dish-price").text());

    const orderItem = {
      title: $title,
      quantity: $quantity,
      price: $price,
    };

  addOrderItem(orderList, orderItem);
  console.log(addTotal(orderList))

  });
});
