	function move(obj,attr,target,speed){
		var starval = parseFloat(getStyle(obj,attr));//获取之前图片距离图片框左边距离
        var onoff = 0;//
        if(target < starval){
        //目标<开始，图片向右走
        speed = -speed;
        onoff = 1;
	}else if(target > starval){
		//目标大于开始，图片向左走
		speed = speed;
		onoff = -1
	}else{
		onoff = 0;
		speed = 0;
	}
	var time = setInterval(function(){
		switch(onoff){
			case 1:
			starval += speed;
			if(starval < target){//让图片停下来
				clearInterval(time);
				starval = target;	
			};
			break;
			case -1:
			starval +=speed;
			if(starval > target){//让图片停下来
				clearInterval(time);
				starval = target;
			};
			break;
			default:clearInterval(time);
		}
		obj.style.left = starval + 'px';//移动之前的图片
	},30);
    function getStyle(obj,attr){   
     return obj.currentStyle?obj.currentStyle[attr]:getComputedStyle(obj)[attr];
   };
};//移动函数结束