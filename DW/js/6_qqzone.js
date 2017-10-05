//alert("$");//弹出jq的代理函数
//qq空间js开始
   //js如何获取元素对象
   /*
   document.getElementById('');//通过ID名获取 只有一个
   document.getElementByTagName('');//通过元素名获取 多个，要加中括号。
   document.getElementByClassName('');//通过Class名获取 多个 集合
   */
  
   var Btn = document.getElementById('btn');//发表按钮,
   var Fbtn = document.getElementById('face');//获取图片ID
   var oul = document.getElementsByTagName('ul');//所有表情ul
   var oli = document.getElementsByTagName('li');//所有表情li
   var Txt = document.getElementsByClassName('text');//获取文本框
   var Main = document.getElementsByClassName('main');//添加对象内容
   
  
   Btn.onclick = function(){//点击发表按钮
  
  // alert(11)
  //添加内容到文本框
  //alert (Txt[0].innerHTML);//获取输入框中文本
  var Ctxt = Txt[0].innerHTML;
  if(Ctxt==''){
  	Txt[0].focus();


  }else{
  	  	 Main[0].innerHTML += '<div class="con"> <div class="top"><img src="./picture/6_qqzoneimages/2.png" width="" height="" alt="" align="absmiddle"/> 啊切</div><div class="content">'+Ctxt+'</div></div>';

   Txt[0].innerHTML ='';

         } 
 }
 //点击表情按钮
 Fbtn.onclick = function(e){
 	e = e||event;//解决兼容问题
 	oul[0].style.display = 'block';
 	e.cancelBubble = true;//阻止事件冒泡
 	//oul[0].style.marginLeft ='40px';
 	//oul[0].className ='';//样式

 }
 /*
 Fbtn.onmouseout = function(){
 	oul[0].style.display ='none';
 	//oul[0].style.marginLeft ='40px';
 	//oul[0].className ='';//样式

 }
*/

document.onclick = function(){//事件冒泡冲突
	oul[0].style.display = 'none';
   
}//点击弹出表情框事件结束
//添加表情，给每个表情添加点击事件
for(var i=0;i<oli.length;i++){
	oli[i].onclick = function(){//给每一个li添加点击事件
		 var Src = this.children[0].src;
         Txt[0].innerHTML += '<img src="'+Src+'" alt="">'
	}
	
}
//qq空间js结束