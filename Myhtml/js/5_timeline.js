//$//jq函数 $('元素')

//用到jQuery/**************
/**********************
**********************/
$('.content:lt(8)').show();//显示序列号小于3的元素
//滚动事件
$(window).scroll(function(){
	
	//$(window).scrollTop();
	var _top = $(window).scrollTop();//获取滚动条高度
	    //console.log(_top);
	    $('.content').each(function(){//遍历
	  var _index = $(this).index()+6;//当前序列号
     var _height  = $(this).offset().top;//获取到当前content到浏览器c窗口顶部距离
     if(_top< _height ){
               $('.content:lt('+_index+')').show();
               $('.content:gt('+_index+')').hide();
               return false;//优先原则，后面的不再找
            }
	    });
})