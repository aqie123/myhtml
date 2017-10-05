var oulpic = document.getElementById('pic');//获取图片ul
var apicli = oulpic.getElementsByTagName('li');//图片序列
var oultext = documennt.getElementById('text-list');//文字
var atextli = oultext.getElementsByTagName('li');//图片序列
var Car = document.getElementsByClassName('car');//运动条 

for(var i =0;i<atextli.length;i++){
	atextli[i].index = i;
	atextli[i].onclick = function(){
		//alert(this.index);
	var lastIndex =nowIndex;//交替
	var nowIndex = this.index;//当前序列号
	var _left = 1146;
	var nowLeft = 15+ this.index*229;
	if(lastIndex<nowIndex){
         _left = -_left

	}
	//移动对象，样式属性，结束值，速度
	//运动条动画
	move ( Car ,'left',nowleft,30);//移入图片动画
	
	//move( obj,attr,target,speed);
	move(apicli[nowIndex],'left',0,30);
	move(apicli[lastIndex],'left',-_left,30);
	//move( apicli[this.nowIndex] , 'left', nowleft , 30);
    }
}