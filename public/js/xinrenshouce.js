/**
 * Created by web on 2019/1/3.
 */
$('.index-left').mouseenter(function(){
  $(this).children(':first-child').addClass('index-mask-change')
  .next().addClass('left-arrow-center-change').next().next()
  .addClass('left-arrow-bottom-change');
})
$('.index-left').mouseleave(function(){
  $(this).children(':first-child').removeClass('index-mask-change')
  .next().removeClass('left-arrow-center-change').next().next()
  .removeClass('left-arrow-bottom-change');
})
$('.index-right').mouseenter(function(){
  $(this).children(':first-child').addClass('index-mask-change')
  .next().addClass('right-arrow-center-change').next().next()
  .addClass('right-arrow-bottom-change');
})
$('.index-right').mouseleave(function(){
  $(this).children(':first-child').removeClass('index-mask-change')
  .next().removeClass('right-arrow-center-change').next().next()
  .removeClass('right-arrow-bottom-change');
})
//右侧链接
$('.index-right-text').on('click','a',function(){
  $('.logo img').addClass('logo-leave');
  $('.logo1 img').addClass('logo1-enter');
  $('nav').addClass('nav-brand-black').children('.nav-brand').children('img').attr('src','../img/xinrenshouce/nav-brand-black.png') 
  $('.index-body').addClass('index-right-enter');
  $('.center-img div').addClass('center-img-right-enter');
  $('.index-right-text').hide()
  $('.right-arrow-bottom').hide()
  $('.index-right-aside').addClass('index-right-aside-show')
  var id=$(this).attr('data-jump');
  var left=-$(id).position().left;
  $('.index-right-detail').animate({'marginLeft':left},1000,asideChange(left));
})
  
  
//左侧链接
$('.index-left-text').on('click','a',function(){
  $('nav').addClass('nav-brand-black').children('.nav-brand').children('img').attr('src','../img/xinrenshouce/nav-brand-black.png') 
  $('.index-body').addClass('index-left-enter');
  $('.center-img div').addClass('center-img-right-enter');
  $('.index-left-text').hide()
  $('.left-arrow-bottom').hide()
  $('.index-left-aside').addClass('index-right-aside-show')
  var id=$(this).attr('data-jump');
  var left=-$(id).position().left;
  var left1=indexLeft(left);
  $('.index-left-detail').animate({'marginRight':-left1},1000,asideChange(left1));
})

$('.nav-brand').click(function(){
  $('.logo img').removeClass('logo-leave');
  $('.logo1 img').removeClass('logo1-enter');
  $('nav').removeClass('nav-brand-black').children('.nav-brand').children('img').attr('src','../img/xinrenshouce/nav-brand.png')
  $('.index-body').removeClass('index-right-enter index-left-enter')
  $('.index-right-aside,.index-left-aside').removeClass('index-right-aside-show')
  $('.center-img div').removeClass('center-img-right-enter');
  $('.index-right-detail,.index-left-detail').animate({'marginLeft':'0','marginRight':'0'},700)
  $('.index-right-text,.index-left-text').show()
  $('.right-arrow-bottom,.left-arrow-bottom').show()
})
$('.jssj-tab,.scyd-tab,.pvprm-tab').on('click','a',function(e){
  $(this).addClass('tab-a-active').siblings().removeClass('tab-a-active')
  var aClass=$(this).attr('data-target');
  $(aClass).show().siblings().hide()
})
$('.index-right-text>ul,.index-left-text>ul').on('mouseenter','a',function(e){
  $(this).children().children().attr('stroke-dasharray','308 308')
})
$('.index-right-text>ul,.index-left-text>ul').on('mouseleave','a',function(e){
  $(this).children().children().attr('stroke-dasharray','0 308')
})  
$('.index-right-aside ul,.index-left-aside ul').on('mouseenter','li',function(e){
  var top=$(this).attr('data-slide');
  $(this).siblings(':first-child').animate({top},10);
})
$('.index-right-aside ul').mouseleave(function(e){
    var marginLeft=parseInt($('.index-right-detail').css('marginLeft'));
    asideChange(marginLeft); 
})
$('.index-left-aside ul').mouseleave(function(e){
  var marginRight=parseInt($('.index-left-detail').css('marginRight'));
  asideChange(-marginRight); 
})

//右侧边栏点击
$('.index-right-aside>ul').on('click','li',function(e){
  
  var id=$(this).attr('data-jump');
  var left=-$(id).position().left;
  asideChange(left);
  $('.index-right-detail').css({'marginLeft':left,/*'transition':`all .7s`*/})
})
//左侧边栏点击
$('.index-left-aside>ul').on('click','li',function(e){
  
  var id=$(this).attr('data-jump');
  var left=-$(id).position().left;
  var left1=indexLeft(left);
  asideChange(left1);
  $('.index-left-detail').css({'marginRight':-left1})
})


function indexLeft(a){
  if(a>-720 && a<=0){}else
  { a+=360}
  return a
}

//左侧滑轮
$('.index-left-detail').on('mousewheel', onMouseScroll1);

function onMouseScroll1(e){
  e.preventDefault();
  var wheel = e.originalEvent.wheelDelta
  var delta = Math.max(-1, Math.min(1, wheel) );       //0  1334 2667 4002  
  var marginRight=parseInt($(this).css('marginRight'));
  
  console.log(marginRight)
  if(delta<0 && doScroll){//向下滚动
    doScroll=false;
    var marginRight2=marginRight+700
    if(marginRight<1334 && marginRight>634){
      marginRight2=1334
    }else if(marginRight<2700 && marginRight>2000){
      marginRight2=2700
    }else if(marginRight>3302){
      marginRight2=4002
    }
    var time=marginRight2-marginRight
    $(this).animate({'marginRight':marginRight2},time,function(){doScroll=true;})
    asideChange(-marginRight2)

  }else if(delta>0 && doScroll){//向上滚动
    doScroll=false;                        //0  1334 2667 4002
    var marginRight4=marginRight-700;
    if(marginRight<700){
      marginRight4=0;
    }
    else if(marginRight<2034 && marginRight>1334){
      marginRight4=1334
    }else if(marginRight<3400 && marginRight>2700){
      marginRight4=2700
    }
    var time=marginRight-marginRight4;
    $(this).animate({'marginRight':marginRight4},time,function(){doScroll=true})
    asideChange(-marginRight4)
  }    
}
//右侧滚轮
$('.index-right-detail').on('mousewheel', onMouseScroll);
  var doScroll=true;
  function onMouseScroll(e){
    e.preventDefault();
    var wheel = e.originalEvent.wheelDelta
    var delta = Math.max(-1, Math.min(1, wheel) );
    var marginLeft=parseInt($(this).css('marginLeft'));
    if(delta<0 && doScroll){//向下滚动
      doScroll=false;
      var marginLeft2=marginLeft-700
      
      if(marginLeft<-634 && marginLeft>-1334){
        marginLeft2=-1334
      }else if(marginLeft<-2000 && marginLeft>-2700){
        marginLeft2=-2700
      }else if(marginLeft<-3302){
        marginLeft2=-4002
      }
      var time=-marginLeft2+marginLeft
      $(this).animate({'marginLeft':marginLeft2},time,function(){doScroll=true;})
      asideChange(marginLeft2)
      
    }else if(delta>0 && doScroll){//向上滚动
      doScroll=false;
      var marginLeft3=marginLeft+700;
      if(marginLeft>-700){
        marginLeft3=0;
      }
      else if(marginLeft<-1334 && marginLeft>-2034){
        marginLeft3=-1334
      }else if(marginLeft<-2700 && marginLeft>-3400){
        marginLeft3=-2700
      }
      var time=marginLeft3-marginLeft
      $(this).animate({'marginLeft':marginLeft3},time,function(){doScroll=true})
      asideChange(marginLeft3)
    }    
  }

 function asideChange(marginLeft){    
    var top=0;
    if(marginLeft>-720 && marginLeft<=0){
      top=0;
      $('.jssj-tab,.jssj-content,.jssj-content-foot').addClass('tab-fade')
      $('.jryx-tab,.jryx-content,.jryx-content-foot').addClass('tab-fade')
    }else{
      $('.jssj-tab,.jssj-content,.jssj-content-foot').removeClass('tab-fade')
      $('.jryx-tab,.jryx-content,.jryx-content-foot').removeClass('tab-fade')
    }
    if(marginLeft>-2035 && marginLeft<=-633){
      top=59;
      $('.scyd-tab,.scyd-content,.scyd-content-foot').addClass('tab-fade')
      $('.ksrm-content').addClass('tab-fade')
    }else{
      $('.scyd-tab,.scyd-content,.scyd-content-foot').removeClass('tab-fade')
      $('.ksrm-content').removeClass('tab-fade')
    }
    if(marginLeft>-3401 && marginLeft<=-1968){
      top=118;
      $('.pvprm-tab,.pvprm-content,.pvprm-content-foot').addClass('tab-fade')
      $('.fbyl-tab,.fbyl-content').addClass('tab-fade')
    }else{
      $('.pvprm-tab,.pvprm-content,.pvprm-content-foot').removeClass('tab-fade')
      $('.fbyl-tab,.fbyl-content').removeClass('tab-fade')
    }
    if(marginLeft<=-3300){
      top=177;
      $('.xxwf-tab,.xxwf-content').addClass('tab-fade')
      $('.jscz-content,.jscz-content-foot').addClass('tab-fade')
    }else{
      $('.xxwf-tab,.xxwf-content').removeClass('tab-fade')
      $('.jscz-content,.jscz-content-foot').removeClass('tab-fade')
    }
  $('.index-right-aside ul,.index-left-aside ul').children('div:first-child').animate({top},200);
}
$('.xxwf-tab').on('mouseenter','a',function(e){
  $(this).children('div').addClass('xxwf-mask-change').next().addClass('xxwf-span-change');
})
$('.xxwf-tab').on('mouseleave','a',function(e){
  $(this).children('div').removeClass('xxwf-mask-change').next().removeClass('xxwf-span-change');
})

//角色入门
$('.jryx-content>a').hover(function(){
  $(this).toggleClass('jryx-gift-hover').children('span').toggleClass('jryx-gift-span-hover')
})
//快速入门
$('.ksrm-list').on('click','a',function(){
  $(this).addClass('ksrm-list-active').siblings().removeClass('ksrm-list-active');
  var n=$(this).attr('data-img');
  var aClass='img:nth-child('+n+')'
  $('.ksrm-img').children(aClass).show().siblings().hide();

})
//副本一览
$('.fbyl-content').on('click','>div',function(){
  var src=$(this).attr('data-video');
  var video=`<div class='container-mask container-mask-change'></div>
    <div class='container-video'>
      <div class='video'>
        <video src="`+src+`"  controls preload autoplay loop></video>
      </div>      
      <a href="javascript:;" class='video-close'></a>
    </div>`
    $('.center-img').parent().append(video);
})


//video

$('.center-img').click(function(){
  var video=`<div class='container-mask container-mask-change'></div>
    <div class='container-video'>
      <div class='video'>
        <video src="../img/xinrenshouce/nishuihan35_6.mp4"  controls preload autoplay loop></video>
        <a class='quality-change' href='javascript:;'>高</a>
        <ul>
          <li data-video='../img/xinrenshouce/nishuihan165.mp4'>超</li>
          <li data-video='../img/xinrenshouce/nishuihan35_6.mp4'>高</li>
          <li data-video='../img/xinrenshouce/nishuihan19_6.mp4'>标</li>
        </ul>
      </div>      
      <a href="javascript:;" class='video-close'></a>
    </div>`
  $(this).parent().append(video);
  
})
$('.container').on('click','.video-close,.container-mask',function(){
  $('.container-video,.container-mask').remove()
})
var canMove=true;
var canMove1=$('.video ul').hasClass('quality-change-enter')
var canMove2=$('.quality-change').hasClass('quality-change-enter')
$('.container').on('mouseenter','.video',function(){
  if(!canMove1){
    $(this).children(':first-child').next().addClass('quality-change-enter')
  }
})
$('.container').on('mouseleave','.video',function(){
    $(this).children(':first-child').next().removeClass('quality-change-enter').next().removeClass('quality-change-enter')
})
$('.container').on('click','.quality-change',function(){
    $(this).removeClass('quality-change-enter')
    $(this).next().addClass('quality-change-enter')  
})
$('.container').on('click','.video ul li',function(){
  var video_url=$(this).attr('data-video');
  var video_html=$(this).html();
  $(this).parent().prev().html(video_html);
  $(this).parent().prev().prev().attr('src',video_url);
  $(this).parent().removeClass('quality-change-enter').prev().addClass('quality-change-enter')  
})
    


