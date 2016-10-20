$(function() {
  var animal = prompt("Type the name of an animal to learn about it (turtle, snake, or insect)");

  if (animal === "turtle") {
    $("#turtleInfo").show();
  } else if (animal === "snake") {
    $("#snakeInfo").show();
  } else if (animal === "insect") {
    $("#insectInfo").show();
  } else {
    alert("Please type 'turtle', 'snake' or 'insect'.")
  }
})
