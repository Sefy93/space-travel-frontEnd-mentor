// -----------------------destiny page

// descrição do planeta
$(".descricao").hide();
$(".moonDescri").show();

//imagem plante
$(".planet").hide();
$(".imageMoon").show();

//moon
$("#moon").click(() => {
  $(".descricao").hide();
  $(".moonDescri").fadeIn(400);

  //desaparecer imagens
  $(".planet").hide();
  $(".imageMoon").show();
  //remove--add border bottom
  $(".nav-btn").children().filter(".btnActive").removeClass("btnActive");
  $("#moon").addClass("btnActive");
});

// mars
$("#mars").click(() => {
  $(".descricao").hide();
  $(".marsDescri").fadeIn(400);
  //desaparecer imagens
  $(".planet").hide();
  $(".imageMars").show();
  //remove--add border bottom
  $(".nav-btn").children().filter(".btnActive").removeClass("btnActive");
  $("#mars").addClass("btnActive");
});

//europa
$("#europa").click(() => {
  $(".descricao").hide();
  $(".europaDescri").fadeIn(400);
  // desaparecer imagens
  $(".planet").hide();
  $(".imageEuropa").show();
  //remove--add border bottom
  $(".nav-btn").children().filter(".btnActive").removeClass("btnActive");
  $("#europa").addClass("btnActive");
});

// titan
$("#titan").click(() => {
  $(".descricao").hide();
  $(".titanDescri").fadeIn(400);
  //desaparecer imagens
  $(".planet").hide();
  $(".imageTitan").show();
  //remove--add border bottom
  $(".nav-btn").children().filter(".btnActive").removeClass("btnActive");
  $("#titan").addClass("btnActive");
});
