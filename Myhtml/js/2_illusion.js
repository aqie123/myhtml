//alert($);
//遮罩层盖住图片
$(".illusion ul li").hover(function(){
	$(this).find(".info").stop().animate({"height":"140px"},200);  //300毫秒
	$(this).find(".info h4").stop().animate({"padding-top":"50px"},200); 

},function(){//鼠标移开
	$(this).find(".info").stop().animate({height:"13px"},200);  //300毫秒
    $(this).find(".info h4").stop().animate({"padding-top":"0px"},200);
});

//边框特效

var $li = $(".illusion2 ul li");
$li.hover(function(){
	$(this).find('p').stop().animate({bottom:0},300);//在300毫秒
	$(this).find('.topill').stop(true).animate({width:'160px'},300);//在300毫秒
	$(this).find('.bottomill').stop(true).animate({width:'160px'},300);//在300毫秒
	$(this).find('.leftill').stop(true).animate({height:'140px'},300);//在300毫秒
	$(this).find('.rightill').stop(true).animate({height:'140px'},300);//在300毫秒
                
},function(){
	$(this).find('p').stop().animate({bottom:'-40'},300);//在300毫秒
	$(this).find('.topill').stop(true).animate({width:'0px'},300);//在300毫秒
	$(this).find('.bottomill').stop(true).animate({width:'0px'},300);//在300毫秒
	$(this).find('.leftill').stop(true).animate({height:'0px'},300);//在300毫秒
	$(this).find('.rightill').stop(true).animate({height:'0px'},300);//在300毫秒

});
