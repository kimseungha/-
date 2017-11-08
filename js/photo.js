$(document).ready(function(){
    var i = $(".admin_table div").each(function(i, e){
    $(this).index();

    var photo = $(".admin_table div a").eq(i);
    var test = $(".admin_table div a span").eq(i);

    $(photo).hover(function(){
      $(test).stop().animate({bottom: 0});},
                  function() {
      $(test).stop().animate({bottom: -60 });}
    );

  });
})
