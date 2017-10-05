
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>验证登录</title>
</head>
<body>

<!--
<?php 
/*
  if(isset($_POST["submit"]) && $_POST["submit"] =="注册"){
 	  $user = $_POST["username"];  
      $psw = $_POST["password"]; 
      $link = mysqli_connect("localhost", "root", "root") or die(mysql_error());
      if($link){
      echo "注册成功".$user .$psw;
      }
  }
*/
?>
-->

<?php 

 if(isset($_POST["submit"]) && $_POST["submit"] =="注册"){
 	  $user = $_POST["username"];  
      $psw = $_POST["password"];  
      $psw_confirm = $_POST["confirm"]; 
       $ema = $_POST["email"]; 
      if($user == "" || $psw == "" || $psw_confirm == ""||$ema =="") { 
          
          echo "<script>alert('请确认信息完整性！'); history.go(-1);</script>";  
        }else{
        	if($psw == $psw_confirm){  //密码输入相同
        		$link =mysqli_connect("localhost","root","root");   //连接数据库  
                mysqli_select_db($link,"test_db");  //选择数据库  
                //mysqli_query($link,"set names 'utf8'"); //设定字符集  
                 mysqli_set_charset('utf8',$link);//设定字符集 
                $sql = "select*from user where username = '{$user}'"; //SQL语句  
                $result = mysqli_query($link,$sql);    //执行SQL语句  
                $num = mysqli_num_rows($result); //统计执行结果影响的行数
                if($num){    //如果已经存在该用户  

                    echo "<script>alert('用户名已存在'); history.go(-1);</script>";  
                } else{     //用户名未注册
                	$sql_insert = "insert into user (username,password,email) values('{$user}','{$psw}','{$ema}')";  
                    $res_insert = mysqli_query($link,$sql_insert);  
                    //$num_insert = mysql_num_rows($res_insert);
                    echo "插入结果是：".$$res_insert."<br>";
                    if($res_insert)  {      //数据插入成功

                        // echo "<script>alert('注册成功！'); history.go(-1);</script>";  
                    } else{
                    	echo "<script>alert('系统繁忙，请稍候！'); history.go(-1);</script>";  
                    }

                }
        	}else{
        		echo "<script>alert('密码不一致！'); history.go(-1);</script>";  
        	}
        }

 }else{
 	echo "<script>alert('提交未成功！'); history.go(-1);</script>";
 }

?>

</body>
</html>