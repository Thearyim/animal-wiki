$(document).ready(function(){
  var animal = prompt("What animals would you like to learn about? (turtle, insect, snake)").toLowerCase();

  if (animal === "turtle") {
    $("#turtles").show();
    $("#animals,#snake,#insects").hide();
  } else if (animal === "snake") {
    $("#snake").show();
    $("#animals,#turtles,#insects").hide();
  } else if (animal === "insect") {
    $("#insects").show();
    $("#animals,#snake,#turtles").hide();
  } else {
    $("#notfound").show();
    $("#animals,#snake,#turtles,#insects").hide();
  }






});

// var age = parseInt(prompt("What is your current age?"));
//
// if (age < 18) {
//   $("#under18").show();
// }
//
// else {
//   $("#above18").show();
// }
// });
