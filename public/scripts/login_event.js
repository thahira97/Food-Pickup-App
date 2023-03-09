// $(document).ready(function () {
//   $("#login-button").click(function (event) {
//     event.preventDefault();
//     const email = $("#email").val();
//     console.log("Value of Email field", email);

//     $.post("/login", { email: email })
//     .then((response) => {

//       console.log("response", response)
//       if (email === "maestro@gmail.com") {
//         window.location.href = 'http://localhost:8080/orders';
//       }
//       else {
//         window.location.href = 'http://localhost:8080/menu';
//       };
//     })
//     .catch((error) => {
//       console.error(error);
//     });

//   });
// });
