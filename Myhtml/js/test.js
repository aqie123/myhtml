$(".moon ul li .item").each(function(i){
	//初始化,把浮动布局改为定位布局
	this.init = function(){
		this.box = $(this).parent();//用box存储每个item父元素li
		$(this).attr("index",i).css({
			"position" : "absolute",
			"left" : this.box.offset().left,//获取父元素偏移值
			"top" : this.box.offset().top
		
		});//添加自定义序列号
		//this.drag();//调用拖拽功能
	}//init函数
	 this.init();
});