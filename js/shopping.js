$(document).ready(function(){
  var i;
   i = $("#shopping_list div").each(

     function(i,e){

          $(this).index();

          var item = $("#shopping_list div").eq(i);
          $(item).hover(function(){
            $(this).addClass('on')},
                        function() {
            $(this).removeClass('on')}
          );
console.log(i,e);
  });

})
