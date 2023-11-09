$(".tech").hide();
$(".active").show();

$("#item1").click(() => {
  $(".tech").filter(".active").hide().removeClass("active");
  $(".item1").addClass("active").show(500);

  $(".btn").filter(".btn-active").removeClass("btn-active");
  $("#item1").addClass("btn-active");
});
$("#item2").click(() => {
  $(".tech").filter(".active").hide().removeClass("active");
  $(".item2").addClass("active").show(500);

  $(".btn").filter(".btn-active").removeClass("btn-active");
  $("#item2").addClass("btn-active");
});

$("#item3").click(() => {
  $(".tech").filter(".active").hide().removeClass("active");
  $(".item3").addClass("active").show(500);

  $(".btn").filter(".btn-active").removeClass("btn-active");
  $("#item3").addClass("btn-active");
});
