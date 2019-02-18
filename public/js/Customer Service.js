/**
 * Created by web on 2019/1/14.
 */
$(function(){
    $("ul li span").click(function(){
        $(this).parent().animate({height:340},500);
        $(this).parent().siblings().animate({height:40},500);
    })
})
