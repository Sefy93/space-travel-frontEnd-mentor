
// -----------------------destiny page

// descrição do planeta
$(".descricao").hide();
$(".moonDescri").show();

//imagem plante
$(".planet").hide();
$(".imageMoon").show();

//moon
$("#moon").click(() => {
  $(".descricao").fadeOut();
  $(".moonDescri").fadeIn(400);

  //desaparecer imagens
  $(".planet").fadeOut();
  $(".imageMoon").fadeIn(400);
  //remove--add border bottom
  $(".nav-btn").children().filter(".btnActive").removeClass("btnActive");
  $("#moon").addClass("btnActive");
});

// mars
$("#mars").click(() => {
  $(".descricao").fadeOut();
  $(".marsDescri").fadeIn(400);
  //desaparecer imagens
  $(".planet").fadeOut();
  $(".imageMars").fadeIn(400);
  //remove--add border bottom
  $(".nav-btn").children().filter(".btnActive").removeClass("btnActive");
  $("#mars").addClass("btnActive");
});

//europa
$("#europa").click(() => {
  $(".descricao").fadeOut();
  $(".europaDescri").fadeIn(400);
  // desaparecer imagens
  $(".planet").fadeOut();
  $(".imageEuropa").fadeIn(400);
  //remove--add border bottom
  $(".nav-btn").children().filter(".btnActive").removeClass("btnActive");
  $("#europa").addClass("btnActive");
});

// titan
$("#titan").click(() => {
  $(".descricao").fadeOut();
  $(".titanDescri").fadeIn(400);
  //desaparecer imagens
  $(".planet").fadeOut();
  $(".imageTitan").fadeIn(400);
  //remove--add border bottom
  $(".nav-btn").children().filter(".btnActive").removeClass("btnActive");
  $("#titan").addClass("btnActive");
});

