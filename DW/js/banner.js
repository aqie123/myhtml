function banner(){//外部整个封装函数

var ban = document.getElementsByClassName("banner")[0];//整个轮播区块
var obtns = document.getElementsByClassName("btnslide");//左右按钮

var obtnp = document.getElementById("bpicture");
var picli = obtnp.getElementsByTagName('li');//八张图片

var obtnn = document.getElementById("num_btn");
var numli = obtnn.getElementsByTagName("li");//八个数字圆点
//鼠标移到banner显示左右切换按钮
ban.onmouseover = function(){
	for(var i=0;i<obtns.length;i++){
       obtns[i].style.display = 'block';//加引号
	}
	clearInterval(automove);

}
ban.onmouseout = function(){
	for(var i=0;i<obtns.length;i++){
       obtns[i].style.display = 'none';//加引号
	}
	automove = setInterval(judge,3000);
}
//圆点点击触发滚动函数
var lastindex = 0;
var d_index = 0;
for(var j=0;j<numli.length;j++){
	numli[j].index = j;
	numli[j].onmouseover = function(){
		lastindex = d_index;
		d_index = this.index;
		//alert(lastindex);
		play();
	}
};
//滚动函数
function play(){
	numli[lastindex].className = "";
	numli[d_index].className ="active";
	var picleft = 790;
	if(d_index > lastindex){//当前点击大于之前的，当前图片像左走
		picleft = -picleft; 
	}else if(d_index < lastindex){//当前点击小于之前的，当前图片向右走
        picleft = picleft;
	}else{
		picleft = 0;
	}
	picli[d_index].style.left = -picleft +"px";
	move(picli[d_index],'left',0,40);
	move(picli[lastindex],'left',picleft,40);//之前的移出


};//play函数结束
//点击左右按钮滚动
obtns[0].onclick = function(){
	lastindex = d_index;  //上任序列号
	d_index++;
	
	if(d_index>=picli.length){
		d_index = 0 ;  //当前序列号
	}
 	play();
};
obtns[1].onclick = function(){
	lastindex = d_index;  //上任序列号
	d_index--;
    if(d_index<0){
    	d_index = picli.length-1 ;  //当前序列号
    }
 	play();
};
//自动滚动
function judge(){
  lastindex = d_index;  //上任序列号
  d_index++;
  
  if(d_index>=picli.length){
    d_index = 0 ;  //当前序列号
  }
  play();

}
var automove = setInterval(judge,3000);

//鼠标悬停计时器终止

}//外部函数结束
banner();