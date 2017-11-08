$(document).ready(function(){

$(".slide_btn a").eq(0).addClass("click_on");
  $(".slide_btn a").click(function(){
    $(".slide_btn a").removeClass("click_on");
    $(this).addClass("click_on");
    var num = $(this).index();
    //슬라이드 라는 함수 넣을거임
    slide(num);
  })

  function slide(n){
    var k= -500*(n);
    $(".item_img_list").animate({left:k},500);
  }

})
