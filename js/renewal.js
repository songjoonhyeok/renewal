$(function(){

  var idx = 0;
  var speed = 1000;
  var call = function(){
        $('.btn-right').trigger('click')
      }
  var tt = setInterval(call,speed);
  var container = $('.slider ul');
  var handier = 0;


  $('#slider-btn .btn-right').click(function(){
    handier ++;
    console.log(handier)
  $('.slider ul').animate({
      'right': "+=607px"
  })
  if( handier > 9){
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


  // $(function() {
  // 	var rollingDiv = $("#rolling2");
  // 	rollingDiv.rolling("left", 130, 100, 3);
  //
  // 	rollingDiv.addRollingItem("<a href='http://www.youtube.com/watch?v=ayjjsallNwc' target='_new'><img src='http://i.ytimg.com/vi/ayjjsallNwc/default.jpg' width='130' height='100' alt='first item' border='0'/></a>");
  // 	rollingDiv.addRollingItem("<a href='http://www.youtube.com/watch?v=pe-MIDDfckw' target='_new'><img src='http://i.ytimg.com/vi/pe-MIDDfckw/default.jpg' width='130' height='100' alt='second item' border='0'/></a>");
  // 	rollingDiv.addRollingItem("<a href='http://www.youtube.com/watch?v=AyRIvX25vRQ' target='_new'><img src='http://i.ytimg.com/vi/AyRIvX25vRQ/default.jpg' width='130' height='100' alt='third item' border='0'/></a>");
  // 	rollingDiv.addRollingItem("<a href='http://www.youtube.com/watch?v=GxplDa3M5Io' target='_new'><img src='http://i.ytimg.com/vi/GxplDa3M5Io/default.jpg' width='130' height='100' alt='fourth item' border='0'/></a>");
  // 	rollingDiv.bind("mouseover", function() {
  // 		 $("#rolling2").stopRolling();
  // 	});
  // 	rollingDiv.bind("mouseout", function() {
  // 		 $("#rolling2").resumeRolling();
  // 	});
  // 	rollingDiv.startRolling(50, 0, 100);
  // });








})
