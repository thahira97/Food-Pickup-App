// Client facing scripts here

$(document).ready(function () {
  $(".increment").click(function () {
    const input = $(this).siblings("input");
    let currentValue = parseInt(input.val());
    let newValue = currentValue + 1;
    input.val(newValue);
  });
  $(".decrement").click(function () {
    const input = $(this).siblings("input");
    let currentValue = parseInt(input.val());
    if (currentValue !== 0) {
      let newValue = currentValue - 1;
      input.val(newValue);
    }
  });
});
