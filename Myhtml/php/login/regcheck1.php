
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>验证登录</title>
</head>
<body>
<?php 

 if(isset($_POST["submit"]) && $_POST["submit"] =="注册"){
 	    $user = $_POST["username"];  
      $psw = $_POST["password"];  
      $psw_confirm = $_POST["confirm"]; 
      $ema = $_POST["email"]; 
      $link =mysqli_connect("localhost","root","root");   //连接数据库  
      mysqli_select_db($link,"test_db");  //选择数据库  
      mysqli_query($link,"set names 'utf8'"); //设定字符集  
      
      $sqlname = "select username from user where username = '{$user}'"; //SQL语句  
      $result = mysqli_query($link,$sqlname);    //执行SQL语句  
      $num = mysqli_num_rows($result); //统计执行结果影响的行数
      $sqlemail = "select email from user where email = '{$ema}'"; //SQL语句  
      $result2 = mysqli_query($link,$sqlemail);    //执行SQL语句  
      $num2 = mysqli_num_rows($result2); //统计执行结果影响的行数
       if($num){    //如果已经存在该用户  

                    echo "<script>alert('用户名已存在'); history.go(-1);</script>";  
                } else if($num2){
                        echo "<script>alert('邮箱已存在'); history.go(-1);</script>";  
                }else{     //用户名未注册且邮箱未注册
                    
      $sql_insert = "insert into user (username,password,email) values('{$user}','{$psw}','{$ema}')";  
       $res_insert = mysqli_query($link,$sql_insert);  
       //$num_insert = mysql_num_rows($res_insert); 
       echo "插入结果是：".$res_insert."<br>";
        if($res_insert)  {      //数据插入成功

           // echo "<script>alert('注册成功！'); history.go(-1);</script>";  
              } else{
                    	echo "<script>alert('系统繁忙，请稍候！'); history.go(-1);</script>";  
                    }
    }
 }else{
 	echo "<script>alert('提交未成功！'); history.go(-1);</script>";
 }

?>

</body>
</html>