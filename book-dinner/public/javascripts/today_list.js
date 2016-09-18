$(document).ready(function(){
  $("#btn_name").click(function () {
    var userName = $("#name").val();
    if (userName !== ""){
      Cookies.set('food_user_name',userName);
      location.reload()
    }
  })



  var userName = Cookies.get('food_user_name');
  if(userName !== '' && userName != undefined){
    // $("#name").val(userName)
    $("#name").hide();
    $("#btn_name").hide()
    $("#tv_name").text(userName)
  }else {
    $("#btn_clear").hide();
    $("#tv_name").hide();
  }

  //遍历今天的ul 看看订饭了没有
  var bookToday = false;

  if (userName !== '' && userName != undefined) {
    $("td").each(function () {
      if ($(this).text() == userName) {
        bookToday = true;
        return false;
      }
    })

  }
  if (bookToday) {
    $('#btn-book').hide();
    $('#btn-unbook').show();
  }else {
    $('#btn-book').show();
    $('#btn-unbook').hide();
  }


  $("#btn_clear").click(function () {
    Cookies.remove('food_user_name')
    location.reload()
  })


  $("#btn-unbook").click(function () {
    $.ajax({
      url:"/today_list/unbook",
      data:{
        name:userName,
      },
      async:true,
      success:function(data){
        if (data.code == 0){
          alert("取消成功")
          location.reload()
        }else{
          // $("#login_log").text(data.msg);
          alert(JSON.stringify(data.msg))
        }
      },error:function(){}
    });
  })
  $("td a").click(function () {
    location.href = 'book_history_list?name='+$(this).text()
  })


  $("#btn-book").click(function () {
    var userName = Cookies.get('food_user_name');
    if (userName == null || userName == '' || userName == undefined){
      alert("请在右上角输入你的名字")
      return;
    }
    $.ajax({
      url:"/today_list/book",
      data:{
        name:userName,
      },
      async:true,
      success:function(data){


        if (data.code == 0){
          alert("预定成功")
          location.reload()
        }else{
          // $("#login_log").text(data.msg);
          alert(JSON.stringify(data.msg))
        }
      },error:function(){}
      });
  })

  // $("#btn-login").click(function(){
  //   var userName = $("#user_name").val();
  //   var userPsw = $("#user_psw").val();
  //   if (userName == ""){
  //     $("#login_log").text("请输入用户名");
  //     return;
  //   }
  //
  //   if (userPsw == ""){
  //     $("#login_log").text("请输入密码");
  //     return;
  //   }
  //
    // $.ajax({
    //   url:"/users/api/login",
    //   data:{
    //     name:userName,
    //     psw:userPsw
    //   },
    //   async:true,
    //   success:function(data){
    //
    //     alert(JSON.stringify(data));
    //     $("#login_result").text(JSON.stringify(data));
    //     if (data.code == 0){
    //       $("#login_log").text("登录成功");
    //       Cookies.set('takeout-cookie',data.token);
    //       location.href = '/today_list';
    //     }else{
    //       $("#login_log").text(data.msg);
    //     }
    //   },error:function(){}
    //   });


  // });
});
