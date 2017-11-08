$(document).ready(function(){

  $(".admin_product >a").click(function(){
    $(this).next().toggleClass("on");
  });
  $(".admin_board >a").click(function(){
    $(this).next().toggleClass("on");
  });


})
