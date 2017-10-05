<?php 
  error_reporting(E_All^E_NOTICE);  //关闭所有提示
  if($_GET["username"]=="admin"){   //如果填入用户名是admin
      $msg = "admin应经存在";
      $msg = iconv("gb2312","UTF-8",$msg); //字符串编码转换
      echo $msg;        //传回http响应数据
  }else{
  	$msg = $_Get["username"]."可用";
  	  $msg = iconv("gb2312","UTF-8",$msg); //字符串编码转换
      echo $msg;        //传回http响应数据

  }    

 ?>