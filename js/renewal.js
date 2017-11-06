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

      $('#graph li:Contains(photoshopCS6)').click(function(e){
          e.preventDefault();
          $('#graph #photoshopCS6').animate({
            'width':'90%'
          },2000)
            })
        $('#graph li:Contains(illustrator‎cs6)').click(function(e){
            e.preventDefault();
            $('#graph #illustrator‎cs6').animate({
              'width':'60%'
            },2000)
              })
          $('#graph li:Contains(html5)').click(function(e){
              e.preventDefault();
              $('#graph #html5').animate({
                'width':'80%'
              },2000)
                })
          $('#graph li:Contains(css3)').click(function(e){
              e.preventDefault();
              $('#graph #css3').animate({
                'width':'70%'
              },2000)
                })
          $('#graph li:Contains(javaScript)').click(function(e){
              e.preventDefault();
              $('#graph #javaScript').animate({
                'width':'40%'
              },2000)
                })
            $('#graph li:Contains(jQuery)').click(function(e){
                e.preventDefault();
                $('#graph #jQuery').animate({
                  'width':'65%'
                },2000)
                  })
            $(window).scroll(function(){
               var src = $(this).scrollTop();
                    if (src >= 10){
                    $('#header').css({
                    'background-color':'rgba(207,108,30,1)'
                 })
               }else if (src <= 10){
                 $('#header').css({
                    'background-color':'rgba(0,0,0,0)'
                 })
               }
            })

  $.fn.shuffleLetters = function(prop){
          // Handling default arguments
    var options = $.extend({
        // Default arguments
             },prop)
   return this.each(function(){
    // The main plugin code goes here
      });
  };

    // A helper function

   function randomChar(type){
      // Generate and return a random character
             }

   function randomChar(type){
       var pool = "";

       if (type == "lowerLetter"){
           pool = "abcdefghijklmnopqrstuvwxyz0123456789";
       }
       else if (type == "upperLetter"){
           pool = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
       }
       else if (type == "symbol"){
           pool = ",.?/\\(^)![]{}*&^%$#'\"";
       }

       var arr = pool.split('');
       return arr[Math.floor(Math.random()*arr.length)];
   }

  $.fn.shuffleLetters = function(prop){

    var options = $.extend({
        "step"  : 8,    // How many times should the letters be changed
        "fps"   : 25,   // Frames Per Second
        "text"  : ""    // Use this text instead of the contents
    },prop)

    return this.each(function(){

        var el = $(this),
            str = "";

        if(options.text) {
            str = options.text.split('');
        }
        else {
            str = el.text().split('');
        }

        // The types array holds the type for each character;
        // Letters holds the positions of non-space characters;

        var types = [],
            letters = [];

        // Looping through all the chars of the string

        for(var i=0;i<str.length;i++){

            var ch = str[i];

            if(ch == " "){
                types[i] = "space";
                continue;
            }
            else if(/[a-z]/.test(ch)){
                types[i] = "lowerLetter";
            }
            else if(/[A-Z]/.test(ch)){
                types[i] = "upperLetter";
            }
            else {
                types[i] = "symbol";
            }

            letters.push(i);
        }

        el.html("");

        // Self executing named function expression:

        (function shuffle(start){

            // This code is run options.fps times per second
            // and updates the contents of the page element

            var i,
                len = letters.length,
                strCopy = str.slice(0); // Fresh copy of the string

            if(start>len){
                return;
            }

            // All the work gets done here
            for(i=Math.max(start,0); i < len; i++){

                // The start argument and options.step limit
                // the characters we will be working on at once

                if( i < start+options.step){
                    // Generate a random character at this position
                    strCopy[letters[i]] = randomChar(types[letters[i]]);
                }
                else {
                    strCopy[letters[i]] = "";
                }
            }

            el.text(strCopy.join(""));

            setTimeout(function(){

                shuffle(start+1);

            },1000/options.fps);

        })(-options.step);

    });
};





$(function(){

    // container is the DOM element;
    // userText is the textbox

    var container = $("#container")
        userText = $('#userText');

    // Shuffle the contents of container
    container.shuffleLetters();

    // Bind events
    userText.click(function () {

      userText.val("");

    }).bind('keypress',function(e){

        if(e.keyCode == 13){

            // The return key was pressed

            container.shuffleLetters({
                "text": userText.val()
            });

            userText.val("");
        }

    }).hide();

    // Leave a 4 second pause

    setTimeout(function(){

        // Shuffle the container with custom text
        container.shuffleLetters({
            "text": "Test it for yourself!"
        });

        userText.val("type anything and hit return..").fadeIn();

    },4000);

});







  // function changeText(cont1,cont2,speed){
  //           	var Otext=cont1.text();
  //           	var Ocontent=Otext.split("");
  //           	var i=0;
  //           	function show(){
  //           		if(i<Ocontent.length)
  //           		{
  //           			cont2.append(Ocontent[i]);
  //           			i=i+1;
  //           		};
  //           	};
  //           		var Otimer=setInterval(show,speed);
  //           };
            // $(document).ready(function(){
            // 	changeText($("p"),$(".p2"),150);
            // 	clearInterval(Otimer);
            // });








})
