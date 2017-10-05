		$(function(){
	//alert($);
	var index = -1;
	var timer = null;
	var num = $(".nav .navleft ul li").length;
	//alert(num)
	var oleftli = $(".nav .navleft ul li");
	var ofloatli = $(".nav .navfloat ul li");
	oleftli.hover(function(){//鼠标移上去添加背景颜色
		 index = $(this).index();//鼠标移动上去获取当前序列号
		 auto(); 
	},function(){
		$(this).removeClass("curr");
		index = $(this).index();//鼠标移动上去获取当前序列号
		ofloatli.eq(index).hide();//
	});
	function auto(){
		oleftli.eq(index).addClass("curr").siblings().removeClass("curr");
        ofloatli.eq(index).show().siblings().hide();
	}
	/*自动轮播
	function autoplay(){
		timer = setInterval(function(){
        index++;
        if(index>14){//n% =15;
        	index=0;
        }  
        auto(); 
	},1000);
	}
	
	autoplay();
	
    $(".nav .navleft").hover(function(){
    	clearInterval(timer);
    },function(){
    	autoplay();
    })*/ 
});