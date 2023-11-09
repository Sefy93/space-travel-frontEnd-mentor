$(".crew").hide();

$(".active").show();

$("#item1").click(() => {
  $(".crew").filter(".active").fadeOut(100).removeClass("active");
  $(".item1").addClass("active").fadeIn(400);

  $(".btn").filter(".btn-active").removeClass("btn-active");
  $("#item1").addClass("btn-active");
});
$("#item2").click(() => {
  $(".crew").filter(".active").fadeOut(100).removeClass("active");
  $(".item2").addClass("active").fadeIn(400);

  $(".btn").filter(".btn-active").removeClass("btn-active");
  $("#item2").addClass("btn-active");
});

$("#item3").click(() => {
  $(".crew").filter(".active").fadeOut(100).removeClass("active");
  $(".item3").addClass("active").fadeIn(400);

  $(".btn").filter(".btn-active").removeClass("btn-active");
  $("#item3").addClass("btn-active");
});

$("#item4").click(() => {
  $(".crew").filter(".active").fadeOut(100).removeClass("active");
  $(".item4").addClass("active").fadeIn(400);

  $(".btn").filter(".btn-active").removeClass("btn-active");
  $("#item4").addClass("btn-active");
});
