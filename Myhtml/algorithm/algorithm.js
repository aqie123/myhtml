//中值排序
var a = [5,4,2,1,3,5,6,7,8,9,0];
//获取中间位置索引
function quickSrot(ary){
	if(ary.length<=1){ //每次利用递归时，记得递归条件
		return ary;
	}
	var middleindex =Math.floor(ary.length/2);
	//获取索引位置，把中间项从原有数组中拿出来并获取到
	var middleitem = ary.splice(middleindex,1)[0];
	//从中间索引开始删除一个，splice返回值均是返回数组
	//把刚刚拿出来中间项和原来数组对比分别放在左右两边
	var left = []; //[1]
	var right = []; //[5,4,3]
	for(var i = 0; i<ary.length; i++){
		ary[i] >middleitem ? right.push(ary[i]):left.push(ary[i]);	
	}
	//console.log(left,right);
	return quickSrot(left).concat(middleitem,quickSrot(right));
	//[].concat(1,quickSrot([4,3,5,2])) ==>[].concat(1,[2].concat([3],quickSrot([4,5])))
}
console.log(quickSrot(a)); 

//插入排序 
var b=[3,2,4,54,1,5];
 
function insertSort(ary){
	var newary = []; //用来装依次从原来数组中拿出来的项目
	newary.push(ary[0]); //把第一项拿出来放到新数组中
	for(var i = 1;i<ary.length;i++){//从第二项开始一个个放到新数组中
		//把拿来的每一项都和新数组中每一项作比较==>用ary[i]循环和新数组中每一项作比较然后找位置
		var ouritem = ary[i];//每次从原来数组拿来的项目
		for(var j = newary.length-1;j>=0;){
			//判断当前拿来项目和新数组中的项
			if(ouritem<newary[j]){//j从最后一项开始，如果原数组拿来的那个项小于新数组最后一项，
				//继续向前查找，否则直接插入到最后一项的后面
				j--;//如果没有当前项大就拿去和当前项的前一项继续比较
				if(j===-1){//如果j--之后都等于-1，说明拿过来的项比索引值0还小，直接插入数组开头
					newary.unshift(ouritem);
				}

				}else{//比这项大
					newary.splice(j+1,0,ouritem);//只要把刚拿过来的这一项放到新数组中，
					//说明刚拿过来这一项已经找到合适位置，循环终止
					//break;
					j=-1;//破坏循环条件

				}

			}
		}
		return newary;	
};
console.log(insertSort(b));


//冒泡排序
var c = [4,23,0,55,22,11,77,44,38,1,99,85,87];
function bubbleSort(ary){
	var flag =false;
	for(var i=0;i<ary.length-1;i++){
		for(var j=0;j<ary.length-1-i;j++){
			if(ary[j]>a[j+1]){
				flag = true;
				ary[j] = ary[j] + ary[j+1];
				ary[j+1] = ary[j] -ary[j+1];
				ary[j] = ary[j] - ary[j+1];
			}
		}
		if(flag){
			flag =false;
		}else{
			break;
		}
	}
	return ary;

}
console.log(bubbleSort(c));

//双循环数组去重
var d = [1,/**循环开始*/2,4,2,5,6,88,4,3,9,2,4,6,1,9,880,67,4,33,32,1,8];
function lesary(ary){
  for (var i =0; i < ary.length -1;i++){//每次拿出一个数组项目，分别和后面的数组项对比
	for(var j = i+1;j<ary.length;j++){
		//a[j]第一次代表从第二项开始到最后一项
		if(ary[i] ===ary[j]){
			//ary.aplice(j,i);只要满足条件就删除当前j循环中的当前项
			//如果把当前项目删除会造成数组塌陷问题
			ary[j] = ary[ary.length-1];//把最后一项赋值给当前项然后再与当前项比较
			ary.length--;//最后一项可以删除
			j--;
		}
	}

  }
  return ary;
}
console.log(lesary(d));

//求1-100所有不被三整除数的和
//方法一
var total =0;
for(var i=1;i<=100;i++){
	if(i%3!=0){
		total+=i;
	}
}
console.log(total);

//求1-100所有不被三整除数的和
//方法二
function sum(n){
	if(n ==0){
		return 0;
	}
	if(n%3 ===0){
		return sum(n-1);
	}
   return n+sum(n-1);//n是真正要加的值，sum(n-1)使程序递归下去
}
console.log(sum(100));
/*************************
**************************/
var num =0;
for(i=0;i<10;i++){
	for(j=0;j<10;j++){
		num++;

	}
	
}
console.log(num);
