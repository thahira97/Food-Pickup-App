// Client facing scripts here

///Function to create html of summary
const createOrderSummary = function(orderItem) {
  let $order = `
  <div class="order-list-item">
    <div class="order-item">
     <i class="bi bi-${orderItem.quantity
    }-circle-fill item-count" id="item-name"></i> ${orderItem.title}
    </div>
    <div class="order-price">
     <span>$<strong >${parseFloat(orderItem.price).toFixed(2)}</strong>
     </span>
    </div>
</div>`;
  return $order;
};

////Function to render the orderlist html on the order summary
 const renderSummary = function(orderList) {

  const $summaryContainer = $("#summary-container");

  for (const order of orderList) {
    const $summaryHtml = createOrderSummary(order);
    $summaryContainer.prepend($summaryHtml);
  }
};

$(document).ready(function() {
  $.get("http://localhost:8080/order-summary/get-all-orders", function(data) {

    const { clientId, dishes } = data;
    console.log(dishes);
    renderSummary(dishes);
  });









});
