//alert($);验证jQuery是否引入
$('.magnifier').hover(function(){
	//移入
	$('.move').show();//鼠标区块和放大镜区块显示
	$('.bimg').show();
},function(){
	//移出
	$('.move').hide();//鼠标区块和放大镜区块显示
	$('.bimg').hide();
});

var x = 0, y = 0, l = 0, t = 0;
$('.move').mousemove(function(e) {
	/* Act on the event 
	改变move坐标 = 鼠标滑动坐标-图片坐标
     
	*/
	var ev = e||window.event; //解决ie和火狐兼容问题
	x = ev.clientX;           //鼠标初始坐标
	y = ev.clientY;

	l = $('.magnifier').offset().left;  //offset偏移值
	t = $('.magnifier').offset().top;

	var nowleft = x - l - $(this).width()/2;    //控制鼠标在土块中间减去第三个值
	var nowtop =  y - t - $(this).height()/2;    //让方块左移，鼠标居中
	var max_w = $('.box').width() - $(this).width();    //格式
	var max_t = $('.box').height() - $(this).height();
	if(nowleft<0){   //控制鼠标不移出去，nowleft是鼠标坐标????
		nowleft = 0;
	}else if(nowleft>max_w){
		nowleft=max_w;
	}
	if(nowtop<0){
		nowtop = 0;
	}else if(nowtop>max_t){
		nowtop=max_t;

	}
	$(this).css({       //this代表move，因为给对象添加事件
		                //透明框跟着鼠标走
		left: nowleft,
		top:nowtop
	});               //注意这里标点符号   
	
});

