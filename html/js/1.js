//alert("欢迎")
var $li = $(".box ul li");
$li.hover(function(){
	$(this).find('p').stop().animate({bottom:0},300);//在300毫秒
	$(this).find('.top').stop(true).animate({width:'200px'},300);//在300毫秒
	$(this).find(',bottom').stop(true).animate({width:'200px'},300);//在300毫秒
	$(this).find('.left').stop(true).animate({height:'300px'},300);//在300毫秒
	$(this).find('.right').stop(true).animate({height:'300px'},300);//在300毫秒
                
},function(){
	$(this).find('p').stop().animate({bottom:'-50'},300);//在300毫秒
	$(this).find('.top').stop(true).animate({width:'0px'},300);//在300毫秒
	$(this).find(',bottom').stop(true).animate({width:'0px'},300);//在300毫秒
	$(this).find('.left').stop(true).animate({height:'0px'},300);//在300毫秒
	$(this).find('.right').stop(true).animate({height:'0px'},300);//在300毫秒

});