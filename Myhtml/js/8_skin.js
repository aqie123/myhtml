//百度换肤系统start
    
    var oA = document.getElementsByClassName('a2');//多个加中括号//换肤按钮
//alert("huanying")
    var oDic = document.getElementById('dic');//六个缩略图
    

    var oLi = oDic.getElementsByTagName('li');//多个
    var oBody = document.getElementsByTagName('body');
    var onOff = true;
    var index = 0;

    
    //alert(oA[0].innerHTML);
    //点击事件,弹出下面的换肤按钮
    oA[0].onclick = function(){

    if( onOff ){
    	 oDic.style.display = "block";
    	 onOff = false;

    }else{
    	oDic.style.display = "none";
    	onOff=true;

    }
}

/*
1.加class名字
2.直接设置边框颜色

*/
for(var i=0;i<oLi.length;i++){
	oLi[i].i = i;//012345
	oLi[i].onclick = function(){
		oLi[index].className = '';
		index = this.i;//index = oLi[1].i;
		this.className ='on';
	var oSrc = this.children[0].getAttribute('dataSrc');
oBody[0].style.backgroundImage = 'url('+oSrc+')';

	}

}

//百度换肤系统End