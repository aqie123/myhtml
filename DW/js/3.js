var Banner = document.getElementsByClassName('banner')[0];

var Btn = Banner.getElementsByClassName('btn');
Banner.onmouseover = function(){   //实现鼠标移上去显示左右按钮
	for(i=0;i<Btn.length;i++){
	  Btn[i].style.display = 'block';
	}
};
Banner.onmouseout = function(){
	for(i=0;i<Btn.length;i++){
	  Btn[i].style.display = 'none';
  }
};
//圆点切换
var numBtn = document.getElementById('num_btn');
var numli = numBtn.getElementsByTagName('li');  //获取圆点

var pic = document.getElementById('pic');   //获取图片
var picli = pic.getElementsByTagName('li');

//点击圆点变红，之前变红的恢复
var d_index = 0;  //点击的序列号，这是一个变量
var lastindex = 0;  //全局变量
for (var j = 0; j < numli.length; j++) {
    numli[j].xlhindex = j;  

    numli[j].onclick = function()    //点击圆点
 {     
   lastindex = d_index;  //上任序列号
 	d_index = this.xlhindex;   //当前序列号

     play(); 
 };

};
 	function play(){
    
	
	numli[lastindex].className = '';
	numli[d_index].className = 'active' ;  //this带表前面对象numli

  var _left = 1120
  if(d_index>lastindex){        //当前位置大于之前，向左走。(控制正负点方向)
       _left = -_left
  }
  picli[d_index].style.left = -_left  +'px';
  move(picli[d_index],'left',0,30);
  move(picli[lastindex],'left',_left,30);   //当前移出
 
  function move(obj,attr,target,speed){      /*封装这个函数*/
   //获取图片距离盒子左边的像素
   
   var starval = parseFloat(getStyle(obj,attr));//点击圆点，获取之前图片距离盒子左边距离
   var onoff = 0; //开始是负数
   if(target<starval){   //目标<开始，
     speed = -speed;   //向左走
     onoff = 1;  //速度是负数走上面
   }else if(target>starval){  //目标>开始，向右走
   	 speed = speed ;  //向右走
   	 onoff = -1;  //速度是正数，走下面
   }else{           //目标图片不动
      onoff = 0;
   }
   
   var time = setInterval(function(){

       if(onoff>0){               //是负数
       	   starval += speed;  //将速度变为变量
           if(starval<target){   //向左走
             clearInterval(time);  //让图片停下来
           starval = target;
          }
        }
     else if(onoff<0){           //是正数
     	  starval += speed;  //将速度变为变量
           if(starval>target){  //向右走
           clearInterval(time);
           starval = target;
           }
         }else{               
         	//clearInterval(time);
         	return false;
         }
     
     
    
    /*
   if(speed>0){
   	  if(starval>target){  //向右走
           clearInterval(time);//让图片停下来
           starval = target;
           }
   }else if(speed<0){
   	   if(starval<target){   //向左走
           clearInterval(time);  //让图片停下来
           starval = target;
          }
   }else{
   	  clearInterval(time);
   }
   */
       obj.style.left = starval + 'px';//移动之前的图片
       },30); 
   
   //alert(getStyle(picli[d_index],'left'));
    function getStyle(obj,attr){   
     return obj.currentStyle?obj.currentStyle[attr]:getComputedStyle(obj)[attr];
   };

}}

Btn[0].onclick = function(){
	lastindex = d_index;  //上任序列号
	d_index++;
	
	if(d_index>=picli.length){
		d_index = 0 ;  //当前序列号
	}
 	play();
}
Btn[1].onclick = function(){
	lastindex = d_index;  //上任序列号
	d_index--;
    if(d_index<0){
    	d_index = picli.length-1 ;  //当前序列号
    }
 	play();
}
