// Client facing scripts here

$(document).ready(function () {
  //OrderList where order item to be pushed

  $(".increment").click(function () {
    const input = $(this).siblings("input");
    let currentValue = parseInt(input.val());
    let newValue = currentValue + 1;
    input.val(newValue);
    // console.log(input.val())
  });
  $(".decrement").click(function () {
    const input = $(this).siblings("input");
    let currentValue = parseInt(input.val());
    if (currentValue >= 2) {
      let newValue = currentValue - 1;
      input.val(newValue);
    }
  });
  $(".add-order-btn").click(function () {
    const $quantity = $(this).siblings().children().find("#quantity").val();
    console.log($quantity);

    const $title = $(this).parent().parent().find("#dish-title").text();
    console.log($title);

    const $price = $(this).parent().find("#dish-price").text();
    console.log($price);

    const orderItem = {
      quantity: $quantity,
      title: $title,
      price: $price,
    };
    console.log(orderItem);

  });
});
