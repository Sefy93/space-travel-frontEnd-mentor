$("#menu").click(() => {
  $(".nav-bar").css("display", "flex");
  $("#menuClose").css("display", "block");
  $("#menu").css("display", "none");
});

$("#menuClose").click(() => {
  $(".nav-bar").css("display", "none");
  $("#menuClose").css("display", "none");
  $("#menu").css("display", "block");
});
