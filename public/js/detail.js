
$(function(){
   $('.m-navwrap li a').hover(function(){      
       $(this).addClass('active').toggleClass("a-side")
   }) 
  
//    手风琴效果
  //  $('.m-subnav>li>a.subnav').click(function(e){        
  //       e.preventDefault();
  //       if($(this).attr('class')!="active"){
  //               $('.m-subnav li>.s-subnav').slideUp('normal');
  //               $(this).next().stop(true,true).slideToggle('normal');
  //               $(this).removeClass('active').addClass('active');
                
  //       }
  //       $(this).parent().addClass('active').addClass("subnav_1").siblings().removeClass('active').removeClass('subnav_1')
  //  })
  // $('ul.m-subnav>li>a.subnav').click(function(){
  //   $(this).addClass("active").next().slideDown().parent().siblings().children('.subnav').next().slideUp().removeClass('active').slideUp();
  //   })
  $('ul.m-subnav>li>a.subnav').click(function(){
    $(this).next().slideDown().parent().siblings().children('.s-subnav').slideUp();
    $(this).parent().addClass('active').siblings().removeClass('active')
    })

   $('.m-navwrap>li').click(function(){       
     var a=$(this).attr('data-toggle');
     $(a).show().nextAll().hide();         
      $(a).children(":first").addClass('active').next().slideDown('normal').parent().nextAll().children(":last").slideUp()
    })

   $('.m-navwrap').on('click',"li",function(){        
        var id=$(this).attr('data-to');
        console.log(id);
        $(id).addClass('active').show().siblings().hide();
        // $(id).addClass('active').show().nextAll().hide();
        // $(html,body).Animation({scrollTop:$('#'+id).offset().top},800);
   })

    $('.s-subnav>a.sunit').click(function(){        
       var b=$(this).attr('data-slide');
       console.log(b)
        $(b).addClass('active').show().siblings().hide();
    })
 })

 

   function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");//构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg);//匹配目标参数
    if (r != null) return unescape(r[2]); return null;//返回参数值
   }
   window.onload = function () {
    var id1 = getUrlParam('id1');
    var id2 = getUrlParam('id2');
    //data-toggle="#a2"
    var attr1=`[data-toggle="#${id1}"]`
    var attr2=`[data-slide="#${id2}"]`
    //$("[href='#']") 所有 href 属性的值等于 "#" 的元素
    var num=attr2.slice(-4,-2);
    console.log(num)
    console.log($("#a3>ul>li:nth-child(2)"))
    if(num>13&&num<19){
    $("#a3>ul>li:nth-child(2)>a.subnav").trigger('click');
    }
    $(attr1).trigger('click')//trigger() 方法触发被选元素的指定事件类型。
    
    $(attr2).trigger('click')
    }