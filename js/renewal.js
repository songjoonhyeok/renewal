$(function(){

  var idx = 0;
  var speed = 10000;
  var call = function(){
        $('.btn-right').trigger('click')
      }
  var tt = setInterval(call,speed);
  //새로운 틀
  var box_width = $(".list").width();
  var list_li_width = $(".list li").width();
  var list_size = list_li_width * $(".list li").size();
  $(".list").width();
  $(".list li:lt(9)").appendTo(".list")
  $(".list").css("margin-left",-list_li_width)

    $('#slider-btn .btn-left').click(function(){
      $(".list").animate({
        marginRight : parseInt($(".list").css("margin-right")) + list_li_width + "px" + speed
      },"swing",function(){
        //$(".list li:gt(2)").appendTo(".list");
        $(".list li:lt(9)").appendTo(".list")
        $(".list").css("margin-right",- list_li_width)
      });
      return false;
    });

    $("#slider-btn .btn-right").click(function(){
      $(".list").animate({
        marginLeft : parseInt($(".list").css("margin-left")) + list_li_width + "px" + speed
      },"swing",function(){
        /* 9개일 경우 */
        $(".list li:gt()").prependTo(".list") //2이하일 경우 list 앞에 붙여준다.
        $(".list").css("margin-left",- list_li_width)
        /*
        6개일 경우
        //$(".list li:gt(2)").prependTo(".list")
        //$(".list").css("margin-left",-bb)
        */
      })
      return false;
    });




    $('.switch .top a').click(function(e){
        e.preventDefault();

      $('.hidden').css('display','block');
      $('.switch .top a').css('display','none');
      $('.bottom').css('display','inline-block');
      $('.bottom a').css('display','inline-block');
      $('#slider').css('margin-top','0px');

     })

     $('.switch .bottom a').click(function(e){
         e.preventDefault();
       $('.hidden').css('display','none');
       $('.switch .top a').css('display','inline-block');
       $('.switch .bottom a').css('display','none');
       $('#slider').css('margin-top','327px');

      })





})
