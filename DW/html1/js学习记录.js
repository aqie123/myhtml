1.//两个单独的对象永远不相等

2.var a=[], b=[];
  a===b          //false,两个单独的数组永不相等

3.  //对象和数组赋值给一个变量
  var a = [];   //定义一个引用空数组的变量a
  var b = a;    //变量b引用同一个数组
  b[0] = 1;    // 变量b引用同一个数组
  a[0]        //变量a也会变
  a===b          //a和b引用同一个数组，所以true

4.//通过循环来完成数组复制
  var a = ['a','b', 'c'];
  var b = [];       
  for(var i=0;i<a.length;i++){
  	b[i] = a[i];       //将元素复制到b中
  }
 5. //一些相等的值
     null == undefined
      "0" == 0;
      0 == false;


 6.
  "7" * "4" 
  10 + "objr=ekmk"  //数字变成字符串
 //显式类型转换
 Number("3")      //
 String(false)
 Boolean([])
 Object(3)
 //*除了null或undefined之外的任何值都具有toString()方法
 //*
 parseInt("11",2) 和 parseFloat()
 [1,2,3,4].toString()    //1234

 7.声明局部变量必须使用var 

 8将对象属性复制到数组
 var o = {x:1,y:2,z:3};
 var a = [],i = 0;


 8.function addstock(pprtfolio,stockname,shares){  //给对象添加新的股票
 	protfolio[stockname] = shares;
 }
 9.//使用数组写法和用字符串表法师来访问对象属性的灵活性

 var sddr = "";
for ( i = 0; i< 4;i++){
	addr += customer["address" + i] +'\n';
}


10.
//for in 遍历关联数组
function getvalue(portfolio){
	var total = 0.0;
	for (stock in portfolio){//遍历portfolio中的每只股票
		var shares = portfolio[stock]; //得到每只股票的股份
		var price = getqutoe(stock);// 查找股票价格
		total += shares * price;  //将结果累加到total中

	}
	return totall  //返回total的值
}
11.
var o = { x:1}
"x" in o ;  //true,x是o的属性
"toString" in o ;    //o继承toString属性
o.hasOwnProperty("toString");   //false,toString是继承属性
var o = inherit({ y: 2});
o.propertyIsEnumerable("y");   //false y是继承来的
Object.prototype.propertyIsEnumberable("toString");  //false, 不可枚举
o.x !== undefined;    //true:o 中有属性x;第二种判断方法
delete o.x;   //删除属性

if(o.x)o.x *=2;      //x是undefined,null,false,"",0,NaN则它保持不变



12.//设置属性的特性，或者让新建属性具有某种特性
var o = {};  //创建一个空对象
//添加一个不可枚举的数据属性x,并赋值为1
Object.defineProperty(o, "x",{
	value :1,
	writeable:true,
	enumerable: false,
	configurable: true
});
//属性是存在的，但不可枚举
o.x;   //=>1
Object.keys(o)   //=>[]
//对属性x做修改，让他变为只读
Object.defineProperty(o,"x",{writable:false});
//试图改变这个属性的值
o.x = 2; //操作失败但不报错，而在严格模式中抛出类型异常
o.x   //=>1
//属性依然是可配置的，通过这种方式进行修改
Object.defineProperty(o,"x",{value: 2});
o.x  //=>2
//将x从数据属性修改为存取器属性
Object.defineProperty(o,"x",{get: function(){return 0;}});
o.x  //=>0

13.
//同时修改或创建多个属性
var p = Object.defineProperties({},{
	x: { value :1,writable:true,enumerable:true,configurable:true},
	y: {value:1,writable:true,enumerable:true,configurable:true},
	r: {
		get:function(){return Math.sqrt(this.x*this.x +this.y*this.y)},
		enumerable:true,
		configurable:true
	}
})

14.
var p = {x:1};       //定义一个原型对象
var o = Obkect.create(p);     //使用原型创建一个对象
p.isPrototypeOf(o)        //true:o继承自p
Object.prototype.isPrototypeOf(o)    //true,p继承自Object.prototype

15.
//遍历数组
var keys = Object.keys(o);   //获得o对象属性名组成的数组
var values = []       //数组中存储匹配属性的值
for (var i = 0;i < keys.length; i++){  //对数组中每个索引
	var key = keys[i];     //获得索引出键值
	values[i] = o[key];          //在values数组中保存属性

} 

//对上面循环优化，数组长度只查询一次非每次循环都要查询
for(var i = 0,len = keys.length; i < len; i++){
	//循环整体不变
	if(a[i]===undefined) continue;//跳过undefined+不存在元素
}