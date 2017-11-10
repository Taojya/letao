// 该文件的功能是用来写首页的js交互的
$(function(){
  // 侧边栏隐藏显示
  $("[data-menu]").on("click",function(){
    $(".menu").toggle();
    $(".content").toggleClass("menuMove");
  })
})
// 登录退出功能
$("[data-logout]").on("click",function(){
  $('#loginModal').modal('toggle');
  // 取消
  $("#cancel").model("hide");
  // 退出登录
  $("#exit").on("click",function(){
    $.ajax({
      type:"get",
      url:"login.html",
      date:{},
      dateType:"json",
      success:function(date){
        if(data.success){
          /*7.退出成功*/
          location.href = 'login.html';
      }
      }
    })
  })
})