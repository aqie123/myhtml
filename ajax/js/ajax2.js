  function loadXMLDoc(json){ 
    var type = json.type || 'GET';  //后面是默认值
    var urla =json.urla;
    var success = json.success;
    var error = json.error || false;
    var data = json.data || '';
    var scriptCharset = json.scriptCharset ||'utf-8';
    var xmlhttp;
    if(window.XMLHttpRequest){
      //ie7+.firefox.chrome,opera,safari浏览器执行代码
      xmlhttp = new XMLHttpRequest();
    }else{
      //ie6-浏览器执行代码
      xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
   xmlhttp.open(type,urla,true);//连接服务器发送请求
  xmlhttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
  xmlhttp.send();  //返回信息  
  
  xmlhttp.onreadystatechange = function(){
    try{
      xmlhttp.readyState == 4&&xmlhttp.status == 200;
      var datastr= xmlhttp.responseText;//接收的数据
        success(datastr); //传出数据
    }
    catch(e){
      if(error){
         error("出错鸟"); 
      }
    }
  }


}  //loadXMLDoc结束