    $('.btn').click(function(){
    	$('.mask').show();
    	$('.login').show();
    	center();

    });
    function center(){
    	var _left = ( $(window).width()-600)/2;
    	var _top = ( $(window).height()-350)/2;
    	$('.login').css({left:_left+"px",top:_top+'p'});

    }
$('.close').click( function(){
	$('.mask').hide();
	$('.login').hide();
});
//拖拽登录框
var l = 0,t = 0, x = 0,y = 0;
var isover =true;
$('.title').mousedown(function(event){
	var e = event||window.event;
	x = e.clientX;
	y = e.clientY;
	l = $('.login').offset().left;
	t = $('.login').offset().top;
	isover=true;
	})
	$(document).mousemove(function(event){
		if(isover){
			var e = event||window.event;
			var nowLeft = e.clientX-x+l;
			var nowTop = e.clientY-y+t;
			$('.login').css({left:nowLeft+"px",top:nowTop+"px"});
		}
	});
	$(document).mouseup(function(){
		isover = false;
	})

