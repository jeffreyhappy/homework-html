$(document).ready(function(){
  	var wilddog = new Wilddog("https://damu-learn.wilddogio.com");
	  var arr = [];

    $("#input_send").click(function(){
      var sendText= $("#input_dm").val();
      if(sendText == null || sendText == ""){
        alert("请输入文字");
        return;
      }else{
        wilddog.child('message').push(sendText);
        $(".s_txt").val('');
      }
    })


    $("#input_clear").click(function(){
      var sendText= $("#input_clear").val();
      wilddog.remove();
      arr = [];
      $('.dm_holder').empty();
    })


    wilddog.child('message').on('child_added',function(snapshot){
      var text = snapshot.val();
      arr.push(text);
      var textObj = $("<div class=\"dm_msg\"></div");
      textObj.text(text);
      $(".dm_holder").append(textObj);
      moveText(textObj);
    })

    var left = $('.dm_holder').width();
    var topMin = $('.dm_holder').offset().top;
    var topMax = topMin + $('.dm_holder').height();

    var moveText = function(textObj){

        var top = randomTop(topMin,topMax);
        textObj.css({
          left:left,
          top:top,
          color:randomColor
        })
        console.log("left = " + left + " top =" + top);
        var time = 20000;

        textObj.animate({
          left:"-100px"
        },time,function(){
          textObj.remove();
        });

    }

    var randomColor = function(){
      return "#"+(function(h){
        return new Array(7 - h.length).join("0")+h;
      })((Math.random()*0x1000000<<0).toString(16));
    }
    var randomTop = function(min,max){
      return min + (max - min) * Math.random();
    }
    //test
    // $("#div_test").animate({
    //   left:"-100px"
    // },10000,function(){
    //     alert("一次完成");
    // });

    // var textObj = $("<div class=\"dm_msg\"></div");
    // textObj.text(11112323);
    // $(".dm_holder").append(textObj);

    // var textObj = $("<div class=\"dm_msg\"></div");
    // textObj.text("6666666");
    // $(".dm_holder").append(textObj);
    // moveText(textObj);
});
