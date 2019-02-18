// 列表鼠标移入
$('.news-item').hover(function(){
  $(this).children(':first').children(':first').toggleClass('item-inner-left-change')
})
//
var pno=1;
var pageSize=5; 
var aclass='';
var pageCount=0;
//定义获取信息的函数
function getNews(pno,pageSize,aclass){
  $.ajax({
    url:'http://127.0.0.1:3000/news?pno='+pno+'&&pageSize='+pageSize+'&&aclass='+aclass,
    success:function(result){
      var list=result.data;
      $('.news-list').empty()
      for(var i=0;i<list.length;i++){
        var time=list[i].ntime.split('T')[0]
        var html=`
        <div class="news-item">
          <div class="item-inner">
            <a class="item-inner-left" href="javascript:;">${list[i].class}</a>
            <a class="item-inner-right" href="http://127.0.0.1:3000/404.html">
              <h3>${time} ${list[i].title}</h3>
              <p>${list[i].content}</p>
            </a>
          </div>
        </div>`
        $('.news-list').append(html)
      }
    }
  })
}
//定义查询总数的函数
function getCount(aclass){
  $.ajax({
    url:'http://127.0.0.1:3000/getCount?aclass='+aclass+'&&pageSize='+pageSize,
    success:function(result){
      pageCount= result.pageCount;  
      $('.pageCount').html(pageCount)
    }
  })
}
$('.content-nav').on('click','a',function(){
  $(this).addClass('active').siblings().removeClass('active') 
  pno=1;
  var aclass=$(this).attr('data-target');
  $('.pno').html(pno);
  getCount(aclass)
  getNews(pno,pageSize,aclass)
})
$(function(){
  $('.content-nav>a:first-child').trigger('click')
  $('.pno').html(pno)
})
//下一页
$('.next').click(function(){
  var aclass=$('.content-nav>.active').attr('data-target');
  getCount(aclass);
  if(pno<pageCount || pageCount==0){
    pno++;
  }
  $('.pno').html(pno);
  getNews(pno,pageSize,aclass);
})
//上一页
$('.prev').click(function(){
  var aclass=$('.content-nav>.active').attr('data-target');
  getCount(aclass);
  if(pno>1){
    pno--;
  }
  $('.pno').html(pno);
  getNews(pno,pageSize,aclass);
})
