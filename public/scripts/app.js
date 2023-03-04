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

  ///Function to create html of the orderitem
  const createOrderItem = function (orderItem) {
    let $order = `<div class="order-list-item">
    <div class="order-item">
      <i class="bi bi-${orderItem.quantity}-circle-fill item-count"></i> ${
      orderItem.title
    }
    </div>
    <div class="order-price">
     <span>$<strong>${parseFloat(orderItem.price).toFixed(
       2
     )}</strong></span> <button type="button" class="btn btn-link delete-item-btn"><i class="bi bi-trash3"></i></button>
    </div>
  </div>`;
    return $order;
  };

  ////Function to render the orderlist html on the order summary

  const renderOrderList = function () {
    // const orderList = getOrderList()
    // console.log('EXISTING ORDERLIST FROM LOCAL STORAGE', orderList)
    const $orderContainer = $("#order-container");
    let $orderItemHtml = "";
    for (const order of orderList) {
      $orderItemHtml += createOrderItem(order);
    }
    $orderContainer.html($orderItemHtml);
  };

  ////Function to add the total amount in order
  const addTotal = function (orderList) {
    let sum = 0;
    for (const item of orderList) {
      sum += item.price;
    }
    return sum;
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

    //Set the input value to 1
    $(this).siblings().children().find("#quantity").val(1);

    addOrderItem(orderList, orderItem);
    renderOrderList(orderList);

    const $totalButton = $(this)
      .parent()
      .parent()
      .parent()
      .parent()
      .parent()
      .parent()
      .find("#total-button");
    console.log($totalButton.text(`Order now • $ ${addTotal(orderList)}.00 `));
    addTotal(orderList);
  });
});
