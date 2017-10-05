/****************************
*****************************
***********输出静夜思*****************/
var comment = "静夜思李白床前明月光，疑是地上霜.举头望明月，低头思故乡.";
var partial = comment.substring(0,3);   //取出标题
partial = partial.bold();      //标题加粗
document.write("<p align=\"center\">"+partial);  //输出标签p,并设置居中对齐

partial = comment.slice(3,5);         //取出作者
document.write("<br />");
document.write(partial);         //输出作者
partial = comment.slice(5,17);       //取出第一句
partial = partial.fontcolor("gray");    //设置颜色为灰
document.write("<br />");
document.write(partial);    //输出第一句
partial = comment.slice(17,29);  //取出第二句
partial = partial.fontcolor("red");
document.write("<br />");
document.write(partial);
document.write("</p>");
/****************************
*****************************
**************for in 输出数组**************/
var poets = new Array("王维","杜甫","李白","白居易"); //创建数组
document.write("古代诗人：");
for (n in poets){                     //逐个输出数组元素
	document.write("<li>" + poets[n]+"</li>");  //输出名字
}
/****************************
*****************************
****************************/
var x = 10;
var y = null;
if(x===null){
	document.write("x is null");
}
if(y===null){
	document.write("y is null");
}
/****************************
*****************************
********** 数据类型的转换******************/
/*
var priceOfApple = "3元";      //苹果价格
var priceOfBanana ="3.5元";  
priceOfApple = parseInt(priceOfApple);
priceOfBanana2 = parseInt(priceOfBanana);
if((priceOfApple === 3)&&(priceOfBanana2 ===3)&&
	(parseFloat(priceOfBanana) === 3.5)){
	alert("苹果价格："+ priceOfApple   //输出苹果价格
		+"\n香蕉价格整数部分："+priceOfBanana2
		+"\n香蕉价格：" + parseFloat(priceOfBanana)
		);
}else{
	alert("转换失败");
}

*/
/****************************
*****************************
****************************/
var na = 10;
function fun(){
	var na = 20;
	document.write("<li> 局部变量na：" + na);
}
fun();
document.write("\n 全局变量na:" +na+"<br />");


/****************************
*****************************
****************************/
for(i=1; i<25;i++){
	if(i%3 ===0){
		document.write(i +" ")
	}
}
with(document){   //用with引用document属性
	write("<br>您的屏幕宽度显示如下： <p>");  //输出提示语句
	write("屏幕实际高度："+screen.availHeight+"<br>");  //输出屏幕实际高
	write("屏幕实际宽度："+screen.availWidth+"<br>");
	write("屏幕区域实际高度："+screen.height+"<br>");  
	write("屏幕区域实际宽度："+screen.width+"<br>");
}
document.write("navigator 对象的方法:" +"<br>")
if(navigator.javaEnabled()) {   //服务器是否支持Java
     document.write("浏览器支持Java的方法<br>");
}    
with(document){
	writeln("最后一次修改时间："+document.lastModified+"<br>");   //显示修改时间
	writeln("标题"+ document.title+"<br>");            //显示标题
	writeln("URL"+document.URL+"<br>");              //显示URL
}
/****************************
*****************************
**********js动态显示滚动******************/
var str="欢迎光临本站！";
function titleMove(){
	//设置当前标题栏和状态栏中要显示的字符
	str = str.substring(1,str.length)+str.substring(0,1);
	document.title = str;  //重新设置文档标题
	status = str;      //设置状态栏信息

}
if(str.length>20){
	 str = "欢迎光临本站！"; 
}//如果字符大于指定长度，变为初始状态
   setInterval("titleMove()",500);   //调节滚动速度
/****************************
*****************************
**********盗链******************//*
var frontURL = document.referrer;       //上一文档URL
var host = location.hostname;         //当前主机域名
if(frontURL !=""){                   //判断文档地址是否为空
	var frontHost=frontURL.substring(7,host.length+7)   //取得上一文档域名
	if(host==frontHost){
		alert("没有盗链")            //域名一致
	}else{
		alert("您是非法盗链")
	}
}else{
	alert("您是直接打开的本文档")
}

*/
/****************************
*****************************
**********打开广告页面******************/
/*function pp(){
window.open("new.htm","new","height=142,width=693");

}

 setTimeout("pp()",2000);  // 打开网页一秒后打开1秒
 */
 /****************************
*****************************
***********使弹出页面居中*****************/
function manage(){
	var hdc=window.open('new.htm','','width=400,height=400');
	hdc.document.title="登录窗口";
	width=screen.width;
	height=screen.height;
	hdc.moveTo((width-400)/2,(height-400)/2);
}
function manage2(){
	var hdc=window.open('register.html','','width=400,height=400');
	hdc.document.title="登录窗口";
	width=screen.width;
	height=screen.height;
	hdc.moveTo((width-400)/2,(height-400)/2);
}
 /****************************
*****************************
***********随机显示图片*****************/
var pics = new Array("./picture/3_img/0.jpg","./picture/3_img/1.jpg",
	      "./picture/3_img/2.jpg","./picture/3_img/3.jpg",
	      "./picture/3_img/4.jpg","./picture/3_img/5.jpg");
function showPic(){
	var n=Math.abs(5-Math.floor(Math.random()*10)); //随机获取图片地址

     pic.src=pics[n];  //取得src的值
}
setInterval("showPic()",1000);         //每秒钟换一幅图
/****************************
*****************************
************动态改变图片大小****************/


/****************************
*****************************
************输出所有链接，这个有问题****************/
/*function showLinks(){
	var links = new Array();

	links = document.all.tags("a");   //取得页面所有超链接，存放在links数组中
	var str ="";
	k=0;         
	for(i in links)          //获取links对象中的值
	{
		
		if(k !=0)str +=links[i] + "\n";   //将结果存储在字符串中
		k++;
	}

alert("一共有" +links.length+"个链接分别是：\n"+ str);
}
*/
windows2 = open("text.htm","newWindow","scrollbars=yes, width=250,height=150");

document.write("文档中有"+document.anchors.length+"个锚点"+"<br>");
document.write("文档中有"+document.links.length+"个链接"+"<br>");
document.write("文档2中有"+windows2.document.anchors.length+"个锚点"+"<br>");

/****************************
*****************************
***********跳转到文档指定位置*****************/
function toWin(num){
	if(windows2.document.anchors.length >num){  //判断锚是否存在 
		windows2.location.hash = num;        //链接到所在的锚
		windows2.focus();
	}else{
		alert("锚不存在！");
	}
}
/****************************
*****************************
************页面跳转****************/
var sends = 10;
function Go(){
	if(--sends == 0){
	window.location.href="#";  //时间跳转的链接
	}else {
	INFO.innerHTML = "浏览器将在"+sends+"后跳转到百度首页";
	}
  
}
setInterval("Go()",1000);  //设置定时器为1秒
/****************************
*****************************
****************************/
function getMsg(){
	url = window.location.href;        //获取当前地址
	with(document){
		write("地址的协议："+location.protocol+"<br>");   //输出地址协议
		write("地址的主机名："+location.hostname+"<br>");  
		write("地址的主机和端口："+location.host+"<br>");  
		write("取得路径名："+location.pathname+"<br>");  
		write("取得整个地址："+url+"<br>");  

	}
}
getMsg();
/****************************
*****************************
************获取文档地址 text未定义****************//*
function Init(){
	var str = window.location.href;      //获取当前地址
	var pos = str.indexOf("?");        //以？为标志赵琪所在位置
	if(pos==1){                  //为1s说明无参数
		text.value = "无参数";       //显示结果
	}else{
		var strs = str.substring(pos+1,str.length);   //取？后面字符
		var strValue = str.split('&');   //以&将字符串strs分成几部分，分别存放在数组
		var i= 0;
		while(i<strValue.length){      //遍历数组中的值显示出来
			text.value+=strValue[i];    //在文本框中显示
			i++;
			text.value+="\r\n";           //换行
		}
	}
}
Init();
*/
/****************************
*****************************
*************js链接跳转***************/
function Assion(){
	location.assign("http://www.baidu.com");
}
function Replace(){
	location.replace("http://www.weibo.com/aqiek");
}
function Reload(){
	location.reload("https://www.taobao.com");    //重新载入当前文档，有一个bool参数

}
/****************************
*****************************
************大小写转换 有问题****************//*
function setCase(caseSpec){
	if(caseSpec =="upper"){//判断是否转换成大写
		document.myForm.firstName.value =
		 document.myForm.firstname.value.toUpperCase();
	}  else{       //转换成小写
		document.myForm.firstName.value =
		 document.myForm.firstname.value.toLowerCase();

	}   
}
setCase();
*/
if(navigator.cookieEnabled){  //判断浏览器是否支持cookie
	document.write("您的浏览器支持cookie功能<br />")

}else{
	document.write("您的浏览器不支持cookie<br />")
}
/****************************
*****************************
************ 查找cookie*  这个有问题***************/
/*
document.cookie = "id = 12";  //创建cookie的名和值
document.cookie = "user = yx";  //创建cookie的名和值
var strCookie = document.cookie;     //获取域名下所有cookie
var arr = str.split(";");   //将多个cookie切割为多个名/值
var userIndex = "";        //定义一个空字符串
var i = 0;
while(i<arr.length){    //遍历cookie数组，处理每个cookie队
	var arrs = arr[i].split("=");  //用“=”将cookie的名与值分开
	if("id"==arrs[0]){     //找到名称为userd的cookie，并返回他的值
		userIndex = arrs[1];    //  将获取的值把哦哦存在变量userIndex中
		break;                //结束循环
	}
	i++;  //变量i+1

}
if(userIndex!=""){
	alert(userIndex);
}else{
	alert("查无此值");
}
document.write(strCookie);

*/
/****************************
*****************************
****************************/
function GetCookieDataBykey(_key,_isDecode){  //
	var key_vals = document.cookie.split(";");  //通过键名获取值
	for(n in key_vals){                     
		var k_v = key_vals[n].split("=");   // 
		if(unescape(k_v[0]) == _key) {       //匹配键
			if(_isDecode){
				return unescape(k_v[1]);   //返回解码后的值
			}else{
				return k_v[1];             //返回未解码的值
			}
		}
	}
	return null;
}

function SetCodedCookie(_key,_val){   //设置cookie
	document.cookie = escape(_key) + "=" + escape(_val); //对键值编码并写入
}
function OnClick(){
	SetCodedCookie( KEY.value,VAL.value);
	info = KEY.value + "键解码前的值：" + GetCookieDataBykey(KEY.value,false)
	+"\n" +KEY.value +"键解码后的值" +GetCookieDataBykey(KEY.value,true);
	alert(info); 

}
/****************************
*****************************
**********cookie生存期*** 这个也有问题***************//*
function setCookie(){
	//
	n =Time.value;
	var name = Name.value;
	var psd = Value.value;
	if(name =""){
		var date= new Date();  //获取当前时间
		var expireDay = n*24*3600*1000  //将date设置为几天后时间
		date.setTime(date.getTime()+expireDays);
		//
		document.cookie = name+"=:"+escape(psd)+":expire="+date.toGMTString();
		alert("设置成功时间为："+expireDays+"秒("+n+"天)");  //输出信息

	}else{
		alert("设置失败，cookie名不能为空")
	}
}
*/
/****************************
*****************************
**********正则匹配查找字符串******************/
var reg = /.o./g;     //寻找字符o前后接任意字符组成的有三个字符的字符串
var str = "How are you mom?" //
var result = new Array();  //用于接受结果
while(reg.exec(str)!=null){
	result.push(RegExp.lastMatch); //添加结果
}
console.log(result);  //在控制台输出
//alert(result);      //

/****************************
*****************************
************获取文本框内容并检查***************/
function jump(){
	var filter = /爆头/g;   //将受限制语句组成正则表达式
    var said = document.getElementById("doc").value;  //受检查语句
     if(filter.test(said)){
	     said ="富强民主文明和谐";
	     alert(said);
     }else{
	    alert(said);
   }
}
/****************************
*****************************
************分组(正则匹配)***************/
var showStr = "";
var str =" this world is mknfvok okokokokokok!!!we wang to\
 search the words:discount and discover.";
var searchStr = /(OK){2}/gi;  //分组的正则表达式
var result = str.match(searchStr);   //查找匹配
for (var i =0;i<result.length;i++){
	showStr+=result[i]+"\n";  //显示信息
}
alert(result.length+":"+showStr)


var result = /(word|world)/;        //候选正则表达式
reStr = (result.test(str));//用test方法检查字符串是否存在
document.write("上面那句话有没有word/world:" + reStr+"<br />");

/*************完全没明白************
var regex = /dis?:(count|cover)/g;   //查找字符的正则表达式
var array = regex.exec(str);      //第一次匹配
var msg = "字符所在位置：\t";
  if(array){
	  msg+=array.index+"\t";    //取得所查找的字符的位置
  }
array = regex.exec(str);           //第二次匹配
if(array){
	msg+=array.index+"\t";           //取得所查找的字符位置
}
document.write(msg);            //显示信息
*/

/****************************
*****************************
***************************/



/****************************
*****************************
***************************/

/****************************
*****************************
***************************/
