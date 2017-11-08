
      function clearText(field){
      if(field.defaultValue == field.value) field.value = '';
      else if(field.value == '') field.value = field.defaultValue;
      }
      $(document).ready(function(){
        $(".nav > ul > li").click(function(){
          $(".nav > ul >li .submenu").slideToggle("slow");
        })
      })
