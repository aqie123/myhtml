
//显示浏览器版本
 var browser = navigator.appName
 var b_version = navigator.appVersion
 var version = parseFloat(b_version)
 document.write("浏览器名称："+browser+"<br />")
 document.write("浏览器版本："+version)

//简单定时器
function timedMsg(){
	var t=setTimeout("alert('过了5秒')",5000)
}
function sayhi(){
	alert("欢迎访问此页面")

}

var book = {
	topic: "JavaScript",//属性对应的值
	fat: true
};
book.author = "Flanagan";
book.contents = "";
//alert(book.topic+book.fat+book["author"])
//alert("欢迎访问此界面")
//var ageAsString = age.toString(); 有问题
//var num1 = Number(86);
var num1 =parseInt("56",8);
var messageasBoolean =Boolean(message);
var result="两个数的乘积是："+age*b;
var num=0;
for(var j=0;j<10;j++){
	if(j==5){
		break;
	}
	num++;
	//document.write(j+ "<br>");
	//document.write(num+ "<hr>");
}
/*
outermost:
for (var i=0;i<10;i++){
	for(var j=0;j<10;j++){
		if(i==5&&j==5){
           break outermost;
		}
		num++;
	}
}
*/


 //加1函数
function plus1(x){

	return x+1;

}
/**/
//平方函数
 var square =  function(num){
 	var total = num*num;           //局部变量
 	return total;
 };
var total = 50;
var number = square(20);
alert(total+number);

//函数
var a=1;
var b=2;
var message;
var car=null;
message="";
var lang ="Java";
lang+="Script";
var age=11;

var points=[//每一个元素都是一个对象
{x:0,y:0},
{x:1,y:1}
]
points.dist = function() {//定义方法计算两点间的距离
	var p1 = this[0];      //通过this获取对当前数组的引用
	var p2 = this[1];
	var a = p2.x - p1.x;
	var b = p2.y - p1.y;
   return Math.sqrt(a*a+b*b)//sqrt计算平方根
};
points.dist();

function  factorial(n){//计算阶乘的函数
	var product = 1;
	while(n>1){
		product *=n;
		n--;
	}return product;
}
factorial(5);

function factorial2(n){//实现上述循环另一种方法
	var i,product =1;
    for(i=2;i<=n;i++)
    	product*=i;
    return product;
}
factorial2(4);
/*
*********************
**********************
********************
*/
function Point(x,y){//构造函数初始化心得point对象
   this.x = x;//this指代初始化的实例
   this.y = y;//函数参数存储为对象的属性
}
//使用new关键字和构造函数来创建一个实例
var p= new Point(1,1);
//给构造函数的prototype赋值
//给point对象定义方法
Point.prototype.r = function(){
	return Math.sqrt(
		this.x*this.x +
		this.y*+this.y
		);
}
//Point 的实例方法继承了方法r()
p.r();
/*
*********************
**********************
********************
*/
/*
function moveon(){
	//通过弹出对话框来询问用户一个问题
	var answer= confirm("你准备好了吗？")
	//单击确定，浏览器会加载一个新页面
	if(answer)window.location="http://weibo.com/aqiek";
}
//在一分钟（6万毫秒）后执行定义的函数//我改成两秒
setTimeout(moveon,2000);
*/
/*
*********************
**********************
********************
*/
//在文档指定区域输出调试信息
//如果文档不存在，则创建一个


function debug(msg){
	//查看HTML id属性来查找文档的调试部分
	var log = document.getElementById("debuglog");
	//如果元素不存在则创建一个
	if(!log){
		log = document.createElement("div");//创建新的div元素
		log.id = "debuglog";                //给元素的div赋值
		//log.innerHTML = "<h1>Debug log</h1>";//定义文档初始内容
		log.innerHTML = "";//定义文档初始内容
		document.body.appendChild(log);//将其添加到文档的末尾
	}
	//将消息包装在<pre>中，并添加到log中
	var pre = document.createElement("pre");//创建pre标签
	var text = document.createTextNode(msg);//将msg包装到一个文本节点
	pre.appendChild(text);//将文本添加到<pre>
	log.appendChild(pre);//将pre添加到log
}

/*
*********************
**********************
********************
*/
function hide(e,reflow){//通过Javascript操纵样式来隐藏元素e
	if (reflow){        //如果第二个参数值为true
		e.style.display = "none";//隐藏这个元素，其所占空间也消失

	}else{
		e.style.visibility = "hidden";//将e隐藏，保留其所占空间
	}
}
function highlight(e){  ///通过设置CSS类来高亮显示e
	//加单的定义或追加HTML类属性
	//假设CSS样式表已经有hilite类的定义
	if (!e.className) e.className = "hilite";
	else e.className += "hilite";

}

/*
*********************
**********************
********************
*/
//load事件只有在文档加载完成后才会触发
//通常需要等待load事件发生后才开始执行javascript代码
window.onload = function hide(){
	//找到文档中所有<img>标签
	var images = document.getElementsByTagName("img");
	//遍历 images,给每个节点“click”事件添加处理程序
	//点击图片时候，将图片隐藏
	for(var i=0;i<images.length;i++){
		var image = images[i];
		if (image.addEventListener)  //注册事件处理程序的另一种方法
			image.addEventListener("click",hide,false);
		else                          //兼容IE8以及之前版本
			image.attachRvent("onclick",hide);
	}
	function hide(event) { event.target.style.vivibility = "hidden";}
};

/*
*********************
**********************
********************
计算二维数组所有数值
*/
var i,j,sum=0,success = false;
/*
for(i=0,j=10;i<10;i++,j--){
	//console.log(i*j);
	sum+=i*j;
}
*/
var matrix = [[1,2,4,6],[2,4,7,8],[8,9,10,11],[9,12,13,15],[1,4,7,2]];
//从标签名开始，以便在报错时退出程序
computer_sum:if(matrix){
	for(var x = 0; x < matrix.length;x++){
		var row = matrix[x];
		if(!row)break computer_sum;
		   for(var y = 0; y < row.length;y++){
		   	var cell = row[y];
		   	if(isNaN(cell)) break computer_sum;
		   	sum+=cell;
		   }
	}success = true;
}
/*
*********************
**********************
********************
*/
//inherit()返回一个集成自原型对象p的属性的新对象
function inherit(p){
	if(p==null) throw TypeError();      //p是一个对象但不能是null
	if(Object.create)
		return Object.create(p);         //判断
	var t= typeof p;                    //
	if (t !=="object"&& t !=="function")throw TypeError();
	function f() {};                       //定义一个空构造函数
	f.prototype = p;                       //将其原型设置为p
	return new f();                         //使用f()创建p的继承对象
}
//alert("这个页面是正常的")
/*
*********************
**********************
********************
*/
var o = { x:1} //定义一个对象
o.x = 2;   //通过修改对象值
o.Y = 3;   //再次更改这个对象

var a = [1,2,3] ;   //数组也是可以更改的
a[0] =  0;         //更改数组的一个元素
var b = [1,2,3];

/*
*********************
**********************
******************* */

 var o = {x:1}, p = {x:3}; //具有相同属性两个对象
 //比较两个数组的函数
 function equalArrays(a,b) {
 	if (a.length !=b.length) return false;//长度不相等
 	for(var i=0;i< a.length;i++){
 		if(a[i]!==b[i]) return false;
 	}
 	return true;    
 }
 a[0] = 1;
//alert(equalArrays(a,b));

//***********************************
//*******************************

//定义一个计算阶乘函数
/*
function factorial(x){
	//如果输入的参数是非法的，则抛出一个异常
	if(x<0) throw new Error("x不能是负数");
	//否则，计算出一个值，并返回
	for(var f = 1; x>1;f*=x, x--);//empty
		
		return f;
}
*/
function factorial(x){
	//如果输入的参数是非法的，则抛出一个异常
	if(x<0) throw new Error("x不能是负数");
	//否则，计算出一个值，并返回
	for(var f = 1; x>1; x--){
		f*=x;
	}
	return f;	
		
}


try {
	//要求用户输入一个数字
	var  n = Number(prompt("请输入一正整数",""));
	//如果输入合法，计算这个数的阶乘
	var f = factorial(n);
	//显示结果
alert(n + "!=" +f);
}
catch (ex) {
	//如果输入不合法，将执行这里的逻辑
  alert(ex);//告诉用户发生什么错误
}
/*
*********************
**********************
***************/
/*关于对象的讲解
*/
var o =  new Object();           //创建一个空对象
var a = new Array();        //创建一个空数组
var b = new Date();        //创建一个表示当前时间的Date对象
var d = new RegExp("js");      //创建可以进行模式匹配的EegExp对象
var o1 = Object.create({x:1 , y:2});    //o1通过这个静态函数继承了属性
var customer = new Object();

//通过原型集成创建一个新对象
function inherit(p){               //inherit() 不能传入null原型来创建函数，不能接收可选的第二个参数
	if (p == null) throw TypeError();
	if (Object.create)
		return Object.create(p);   //如果存在，则直接使用
	var t = typeof p;          //否则进一步检测
if (t !== "object"&& t !=="function") throw TypeError();
function f() {};              //定义一个空构造函数
f.prototype = p;            //将其原型的属性设置为p
return new f();              //使用f()创建p的继承对象

}

//函数读取继承对象属性时，读取的是继承来的值，
//如果给继承对象属性赋值，这些属性只会硬性继承对象自身，
//而不是原始对象

var o = {x:1,y:2,z:3};  
//alert(o.propertyIsEnumberable("toString"))  //false.不可枚举
/*
for(p in o)  //遍历属性
	console.log(p);    
*/

//复制属性的特性
Object.defineProperty(Object.prototype,
	   "extend",                     //定义Object.prototype.extend
	   {
	   	writable:true,
	   	enumerable:false,            //将其定义为不可枚举
	   	configurable:true,
	   	value:function(o){         //值就是这个函数
	   		//得到所有的自有属性，包括不可枚举属性
	   		var names = Object.getOwnPropertyNames(o);
	   		//遍历它们
	   		for(var i =0;i<names.length;i++){
	   			//如果属性存在跳过
	   			if(names[i] in this) continue;
	   			//获得o中的属性描述符
	   			var desc = Object.getOwnPropertyDescriptor(o,names[i]);
	   			//用它给this创建一个属性
	   			Object.definedProperty(this,names[i],desc);
	   		}

	   	}

	   })
/*
*********************
**********************
***************/
/****创建一个多维数组*/
var table = new Array(10);    //表格有十行
for(var i = 0;i <table.length;i++)
	table[i] = new Array(10);   //每行有十列
//初始化数组
for(var row = 0; row < table.length; row++){
	for(col = 0;col < table[row].length;col++){
		table[row][col] = row*col;
	}
}
//使用多维数组来计算（查询）5*7
var product = table[5][7];   //35
/*
*********************
**********************
***************/
var calculator ={     //对象直接量
	operand1: 1,
	operand2:2,
	add:function(){
		//this指代当前对象
		this.result = this.operand1 + this.operand2;
	}

};
calculator.add();   //调用计算1+1结果

/*
*********************
**********************
***************/

