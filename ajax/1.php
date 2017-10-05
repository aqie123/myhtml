<?php 

   //echo ("成功调用了");
   //$usernum = $_POST['user'];
   $usernum = $_GET['user']; 
   if($usernum ==1){
   	echo'您是用户一，您的话费还剩十元';
   }
   if($usernum == 2){
   	echo'您是用户二，您的话费还剩一百元';
   }

?>