$(function(){

  var idx = 0;
  var speed = 1000;
  var call = function(){
        $('.btn-right').trigger('click')
      }
  var tt = setInterval(call,speed);

  var handier = 0;

  $('#slider-btn .btn-right').click(function(){
    handier ++;
    console.log(handier)
  $('.slider ul').animate({
      'right': "+=607px"
  })
  if( handier > 6){
      handier = 0;
     $('.slider ul').eq(handier).animate({'right': "0px"})
      console.log('1234');
   }

  })

  // $('.slide-product .prev').click(function(){
  //   handier --;
  //   console.log(handier)
  // $('.slide-product ul').animate({
  //     'right': "-=1000px"
  // })
  // if( handier < 0){
  //     handier = 0
  //   return($('.slide-product ul').eq(handier).animate({'right': "0px"}))
  //    $('.slide-product ul').eq(handier).animate({'right': "0px"})
  //     console.log('1234');
  //  }
  //     // console.log(idx);
  // })











})
