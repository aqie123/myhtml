var Banner = document.getElementsByClassName('banner')[0];

var Btn = Banner.getElementsByClassName('btn3');
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
var d_index = 0;  //点击的序列号，这是一个变量
for (var j = 0; j < numli.length; j++) {
	//console.log(i); 在控制台打印出i
	numli[j].xlhindex = j;       //这个index是属性，自定义可以随便写
	numli[j].onclick = function(){
    //numli[i]['onclick'] = function(){
	//alert(i)
	//console.log(i);
	var lastindex = d_index;  //上任序列号
	d_index = this.xlhindex;   //当前序列号
	numli[lastindex].className = '';
	this.className = 'active' ;  //this带表前面对象numli

	//在一段时间内，对应图片移入
	//获取到left值
   //picli[d_index].style.left
   //var starval = parseFloat(getStyle(picli[d_index],'left'));  //调用函数
   var starval = getStyle(picli[d_index],'left'); 
   /*setInterval(function(){   //定时器
   	   starval += 10;
       
    },30) */
    alert(starval);
   //console.log(starval);
   //获取元素样式值 currentstyle

   function getStyle(obj,attr){    //不是很清楚
   	//picli[d_index].currentStyle.left   IE
   	//getComputedStyle(picli[d_index]).left   非IE
   	//picli[d_index].currentStyle?picli[d_index].currentStyle.left:getComputedStyle(picli[d_index]).left
     return obj.currentStyle?obj.currentStyle[attr]:getComputedStyle(obj,false)[attr]
   };
   /* 另一种写法
function getStyle(obj, attr)  
{  
    if(obj.currentStyle)  
    {  
        return obj.currentStyle[attr];  
    }  
    else  
    {  
        return getComputedStyle(obj,false)[attr];  
    }  
} 
*/
   
   /* */
	//前面图片移出
	//picli[lastindex]
	}
}