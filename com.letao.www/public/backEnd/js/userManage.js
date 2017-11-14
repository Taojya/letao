$(function($){
// 获取数据，并呈现
$getUserManage=function(pageNum){
  $.ajax({
    type:"get",
    url:"/user/queryUser",
    date:{
      page:pageNum||1,
      pageSize:5
    },
    success:function(date){
      console.log(date);
    }

  })
}

  
})