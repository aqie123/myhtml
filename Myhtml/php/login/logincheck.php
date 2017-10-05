<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>验证登录</title>
</head>
<body>
<?php 
//echo"<script>alert('登陆成功')</script>";
/*
if(isset($_POST["submit"]) && $_POST["submit"] == "登录"){
    $user = $_POST["username"];
  	$psw = $_POST["password"];
  	echo $user;
  	echo $psw;
  }
  */

 if(isset($_POST["submit"]) && $_POST["submit"] == "登录"){
    $user = $_POST["username"];
  	$psw = $_POST["password"];
  	
  	$link = mysqli_connect("localhost", "root", "root") or die(mysql_error());
  	/*
  	if($link){
  		echo "Mysql 配置正确!";
	 }
	 */
	 mysqli_select_db($link,"test_db");
	 mysqli_query($link,"set names 'utf8'");
	 $sql = "select * from user where username = '{$user}' and password = '{$psw}' ";  
     $result = mysqli_query($link,$sql);  
     $num = mysqli_num_rows($result);
     if($num)  
            {  
                $row = mysqli_fetch_array($result);  //将数据以索引方式储存在数组中  
                echo "欢迎".$row[0]."登陆成功!";  
            }  
            else  
            {  
                echo "<script>alert('用户名或密码不正确！');history.go(-1);</script>";  
            } 
  	
}else{
	echo "<script>alert('提交未成功！'); history.go(-1);</script>";

}

mysqli_close($link); //关闭MySQL连接

?>

<script type="text/javascript">
  
var sends = 5;
function Go(){
  if(--sends == 0){
  window.location.href="http://192.168.1.104/myblog/html/login/login.php";  //时间跳转的链接
  }else {
  INFO.innerHTML = "浏览器将在"+sends+"后跳转到之前首页";
  }
  
}
setInterval("Go()",1000);  //设置定时器为1秒
</script>
<label id="INFO" />
</body>
</html>