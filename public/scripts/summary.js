// Client facing scripts here

const { getSummary } = require("../../db/queries/ord-sum");

$(document).ready(function () {

    ///Function to create html of summary
    const createOrderSummary = function (orderItem) {
      let $order = `
      <div class="order-list-item">
        <div class="order-item">
         <i class="bi bi-${
           orderItem.quantity
         }-circle-fill item-count" id="item-name"></i> ${orderItem.title}
        </div>
        <div class="order-price">
         <span>$<strong >${parseFloat(orderItem.price).toFixed(2)}</strong>
         </span>
         <button type="button" class="btn btn-link delete-item-btn"         id="delete-button"><i class="bi bi-trash3" ></i>
         </button>
        </div>
    </div>`;
      return $order;
    };

    ////Function to render the orderlist html on the order summary

  const renderSummary = function() {
    console.log("render summary");
      const $summaryContainer = $("#summary-container");
    let $summaryHtml = "";
    orderList = getSummary()
      for (const order of orderList) {
        $summaryHtml += createOrderSummary(order);
      }
      $summaryContainer.html($summaryHtml);
      console.log("render summary")
    };

  renderSummary();

});
