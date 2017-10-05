   //alert("欢迎你")

   function setHeight(){   //设置浏览器高度
  document.body.style.height = screen.height;
  document.body.style.width = screen.width;
  

}
/*
   var Btn =  document.getElementsByClassName('btn')[0];
   var Btn1 =  document.getElementsByClassName('btn1')[0];
   var Mask = document.getElementsByClassName('mask')[0];
   var Login = document.getElementsByClassName('login')[0];
   var Register = document.getElementsByClassName('register')[0];
   var Close = document.getElementsByClassName('close')[0];
   var Close1 = document.getElementsByClassName('close')[1];
Btn.onclick = function(){
	Mask.style.display = 'block';
	Login.style.display = 'block';
   center();

};
Btn1.onclick = function(){
  Mask.style.display = 'block';
  Register.style.display = 'block';
   center();

};
//登录框居中
function center(){
	//获取到浏览器窗口宽度或者高度
  // console.log( window.innerWidth);
   var _left = (window.innerWidth-600)/2;
    var _top = (window.innerHeight-350)/2;
    Login.style.left =_left+"px";
    Login.style.top =_top+"px";
    Register.style.left =_left+"px";
    Register.style.top =_top+"px";

};
//动态改变浏览器窗口大小也要居中
window.onresize = function(){
   center();
};
//关闭登录框
Close.onclick = function(){
		Mask.style.display = 'none';
	Login.style.display = 'none';
  Register.style.display = 'none';
};
//关闭注册框
Close1.onclick = function(){
  Mask.style.display = 'none';
  Register.style.display = 'none';
};*/

/****************************************
****************************************
****************jQUERY************************
****************************************/
    $('.btn').click(function(){
      $('.mask').show();
      $('.zc').show();
      center();

    });
    $('.btn1').click(function(){
      $('.mask').show();
      $('.dl').show();
      center();

    });
    function center(){
      var _left = ( $(window).width()-600)/2;
      var _top = ( $(window).height()-350)/2;
      $('.zc').css({left:_left+"px",top:_top+'px'});
      $('.dl').css({left:_left+"px",top:_top+'px'});

    }
$('.close').click( function(){
  $('.mask').hide();
  $('.zc').hide();
  $('.dl').hide();
});


//拖拽登录框
var x =0, t = 0, l = 0,y = 0,tdl = 0,ldl =0;


  var isover = true;
  $('.title').mousedown(function(event){
     var e = event||window.event;
     x = e.pageX;           //鼠标初始坐标距离页面顶端client.x是可视窗口
     y = e.pageY;
     l =$('.zc').offset().left;
     ldl =$('.dl').offset().left;
     t = $('.zc').offset().top;
     tdl = $('.dl').offset().top;
     isover = true;

  });
$(document).mousemove(function(event){
    if(isover){
      var e = event||window.event;
      var nowLeft = e.clientX-x+l;
      var nowTop = e.clientY-y+t;
      var nowLeft1 = e.clientX-x+ldl;
      var nowTop1 = e.clientY-y+tdl;
      $('.zc').css({left:nowLeft+"px",top:nowTop+"px"});
      $('.dl').css({left:nowLeft1+"px",top:nowTop1+"px"});
     // $('.lg').css({left:nowLeft+"px",top:nowTop+"px"});
    }
  });
$(document).mouseup(function(){
    isover = false;
  })
/***********登录框事件结束******************/
/****************验证填写表单*******************/


/***************************************
*************************************
************表单验证*************************/
//注册页面开始
var ouser = document.getElementById('username');
var name_msg = document.getElementsByClassName("name_msg")[0];
var name_length = 0;

var oemail = document.getElementById('email');
var regex = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/;
var email_msg = document.getElementsByClassName("email_msg")[0];

var psw = document.getElementById('psw');
var psw2 = document.getElementById('psw2');
var psw_msg = document.getElementsByClassName("psw_msg")[0];
var psw2_msg = document.getElementsByClassName("psw2_msg")[0];
var intensity = document.getElementsByClassName("intensity")[0]
var spanemail = intensity.getElementsByTagName("span");
var registerbtn = document.getElementById("submit");
var count = document.getElementsByClassName("count")[0];


var ouser_state = false;
var email_state = false;
var psw_state = false;
var psw2_state = false;
var registerbtn = document.getElementById("submit");

//用户名
ouser.onblur=function(){    //form1.username.value //失焦 
//含有非法字符，不能为空，长度超过25，长度少于六个字符  
   var re = /[^\w\u4e00-\u9fa5]/g;      
    if(this.value ==''){
     this.value= '请输入用户名'
     name_msg.innerHTML = "<i class = 'fa-close'>用户名不能为空</i>";
     ouser_state = false;
     
   }else if(re.test(this.value)){
    name_msg.innerHTML = "<i class = 'fa-close'>含有非法字符</i>";
    ouser_state = false;
   }else if(name_length >25){
    name_msg.innerHTML = "<i class = 'fa-close'>不能超出25个字符</i>";
    ouser_state = false;
   }else if((name_length<6)&&(name_length>0)){
    name_msg.innerHTML = "<i class = 'fa-close'>不能小于六个字符</i>";
    ouser_state = false;
   }else{
    name_msg.innerHTML = "<i class = 'fa-close'>OK!</i>";
    ouser_state = true;
   }
 
   checkform();
//console.log(this.value);
}  //ouser.onblur函数结束
//ouser.onkeydown=function(){
  ouser.onfocus=function(){
    if(this.value =='请输入用户名'){
    this.value = '';
   }
}

ouser.onkeyup = function(){   //显示用户名长度
   count.style.visibility = "visible";
  name_length = getLength(this.value);
  count.innerHTML = name_length+"个字符";
  if(name_length==0){
    count.style.visibility = "hidden";
  }
  
}

//用户名函数结束



   //是否全为相同字符：
function findStr(str,n){
  var temp = 0;
  for(var i = 0;i<str.length;i++){
    if(str.charAt(i)==n){
      temp++;
    }
  }return temp;
};

function getLength(str){  //获取字符串长度
  return str.replace(/[^\x00-xff]/g,"xx").length;
}
//alert(getLength("明天"));

//密码

 psw.onkeyup = function() {
        if (this.value.length > 5) {
            spanemail[1].className = "active";
            psw2.removeAttribute("disabled");
            psw2_msg.style.display = "inline-block";
        } else {
            spanemail[1].className = "";
            psw2.setAttribute("disabled", "");
            psw2_msg.style.display = "none";
        }
        if (this.value.length > 10) {
            spanemail[2].className = "active";
            psw2.removeAttribute("disabled");
            psw2_msg.style.display = "inline-block";
        } else {
            spanemail[2].className = "";
        }
    }

 psw.onblur = function() {
        //不能为空 不能相同字符 长度6-16 不能全数字 不能全字母 
        var m = findStr(psw.value, psw.value[0]);
        var re_n = /[^\d]/g;
        var re_t = /[^a-zA-Z]/g;
        
        if (this.value == "") {
            psw_msg.innerHTML = "<i class='fa-close'>不能为空</i>";
            psw_state = false;
        } else if (m == this.value.length) {
            psw_msg.innerHTML = "<i class='fa-close'>不能为相同字符</i>";
            psw_state = false;
        } else if (this.value.length < 6 || this.value.legth > 16) {
            psw_msg.innerHTML = "<i class=' fa-close'>长度应为6-16个字符</i>";
            psw_state = false;
        } else if (!re_n.test(this.value)) {
            psw_msg.innerHTML = "<i class=' fa-close'>不能全部为数字</i>";
            psw_state = false;
        } else if (!re_t.test(this.value)) {
            psw_msg.innerHTML = "<i class='fa-close'>不能全部为字母</i>";
            psw_state = false;
        } else {
            psw_msg.innerHTML = "<i class='fa-check-square'>OK!</i>";
            psw_state = true;
        }
        checkform();
    }

 //确认密码
 psw2.onkeyup = function() {
        if (psw2.value != psw.value) {
            psw2_msg.innerHTML = "<i class='fa fa-close'>两次输入不一致</i>";
            psw2_state = false;
        } else {
            psw2_msg.innerHTML = "<i class='fa fa-check-square'>OK!</i>";
            psw2_state = true;
        }
        checkform();
    }

//邮箱
oemail.onfocus=function(){
    if(this.value =='请输入邮箱'){
    this.value = '';
   }
}
//var strema = form1.email.value;这个是错误的，不能获取当前


oemail.onblur=function(){ //邮箱失焦
  if(this.value ==""){
    email_msg.innerHTML = "<i class = 'fa-close'>邮箱不能为空</i>";
    email_state = false;
  }else if(!regex.exec(this.value)){
      email_msg.innerHTML = "<i class = 'fa-close'>邮箱格式不正确</i>";
      email_state = false;
    }else{
    email_msg.innerHTML = "<i class = 'fa-close'>OK!</i>";
    email_state = true;
   }
   checkform();
}//oemail.onblur函数结束


function checkform(){
  if(ouser_state && psw_state && psw2_state &&email_state){
    registerbtn.disabled=false;
  }else{
    registerbtn.disabled=true;
  }
}

//登陆页面开始
//var ouser2 = document.getElementsByClassName('username')[1];
var psw3 = document.getElementById('psw3');
var ouser1_state = false;
var psw3_state = false;
var name2_msg = document.getElementsByClassName("name_msg")[1];
var psw3_msg = document.getElementsByClassName("psw_msg")[1];
var registerbtn2 = document.getElementById("submit2");

  form2.username.onfocus=function(){
    if(this.value =='请输入用户名'){
    this.value = '';
   }
}
form2.username.onblur=function(){    //form1.username.value //失焦 
//含有非法字符，不能为空，长度超过25，长度少于六个字符  
//两种获取方法
   var re = /[^\w\u4e00-\u9fa5]/g;      
    if(this.value ==''){
     this.value= '请输入用户名';
     name2_msg.innerHTML = "<i class = 'fa-close'>用户名不能为空</i>";
     ouser1_state = false;
     
   }else if(re.test(this.value)){
    name2_msg.innerHTML = "<i class = 'fa-close'>含有非法字符</i>";
    ouser1_state = false;
   }else if(name_length >25){
    name2_msg.innerHTML = "<i class = 'fa-close'>不能超出25个字符</i>";
    ouser1_state = false;
   }else if((name_length<6)&&(name_length>0)){
    name2_msg.innerHTML = "<i class = 'fa-close'>不能小于六个字符</i>";
    ouser1_state = false;
   }else{
    name2_msg.innerHTML = "<i class = 'fa-close'>OK!</i>";
    ouser1_state = true;
   }
 
   checkform1();
//console.log(this.value);
}  //ouser.onblur函数结束

function checkform1(){
  if(ouser1_state && psw3_state){
    registerbtn2.disabled=false;
  }else{
    registerbtn2.disabled=true;
  }
}
psw3.onkeyup = function() {
  if (this.value == "") {
            psw3_msg.innerHTML = "<i class='fa-close'>不能为空</i>";
            psw3_state = false;

}else if (this.value.length < 6 || this.value.legth > 16) {
            psw3_msg.innerHTML = "<i class=' fa-close'>长度应为6-16个字符</i>";
            psw3_state = false;
          }else{
            psw3_msg.innerHTML = "<i class='fa-check-square'>OK!</i>";
            psw3_state = true;
          }
          checkform1();
}