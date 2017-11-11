// 该文件的功能是用来写首页的js交互的
$(function () {
  // 侧边栏隐藏显示
  $("[data-menu]").on("click", function () {
    $(".menu").toggle();
    $(".content").toggleClass("menuMove");
  })
  // 二级菜单显示隐藏
  $('.aside [href="javascript:;"]').on("click", function () {
    $that = $(this);
    $child = $that.siblings(".child");
    $child.slideToggle();
  })
  // 菜单选中样式
  $(".aside a").on("click", function () {
    // $(".aside a").removeClass(".chosen");
    $(this).addClass(".chosen");
  })
  // 登录退出功能
  $("[data-logout]").on("click", function () {
    $('#loginModal').modal('toggle');
    // 取消
    $("#cancel").model("hide");
    // 退出登录
    $("#exit").on("click", function () {
      $.ajax({
        type: "get",
        url: "login.html",
        date: {},
        dateType: "json",
        success: function (date) {
          if (data.success) {
            /*7.退出成功*/
            location.href = 'login.html';
          }
        }
      })
    })
  })
  // NProgress进度条
  NProgress.configure({
    showSpinner: false
  });
  /*在ajax开始请求的时候  把进度条显示出来*/
  $(document).ready(function () {
    NProgress.start();
  });
  /*在ajax结束请求的时候  把进度条完成*/
  $(document).ready(function () {
    NProgress.done();
  });





})
