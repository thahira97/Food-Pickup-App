// Client facing scripts here

$(document).ready(function () {
  $(".increment").click(function () {
    const input = $(this).siblings("input");
    let currentValue = parseInt(input.val());
    let newValue = currentValue + 1;
    input.val(newValue);
  });
});
