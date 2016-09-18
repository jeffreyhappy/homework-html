$(document).ready(function(){
  $("#btn-login").click(function(){
    var userName = $("#user_name").val();
    var userPsw = $("#user_psw").val();
    if (userName == ""){
      $("#login_log").text("请输入用户名");
      return;
    }

    if (userPsw == ""){
      $("#login_log").text("请输入密码");
      return;
    }

    $.ajax({
      url:"/users/api/login",
      data:{
        name:userName,
        psw:userPsw
      },
      async:true,
      success:function(data){

        alert(JSON.stringify(data));
        $("#login_result").text(JSON.stringify(data));
        if (data.code == 0){
          $("#login_log").text("登录成功");
          // $("#login_log").text("登录成功 token=" + data.data.token);
          Cookies.set('takeout-cookie',data.data.token.toString(),{ expires: 30 });
          location.href = '/today_list';
        }else{
          $("#login_log").text(data.msg);
        }
      },error:function(){}
      });
  });
  $("#login_log").text("日志加载成功");
  $("#login_result").text("这里显示结果" + Cookies.get('takeout') +"  " + window.location.host);
});
