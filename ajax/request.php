<?php
//echo 1;
 
$page =$_GET['page'];
//echo $page;
$db= include 'db.php';
//echo count($db); //统计多少
//echo $page;

$num =10;
$start =($page-1)*$num;
$end =$start+$num;
$result =array();
for($i=$start;$i<$end;$i++){

     $result[] = $db[$i];
	
}
echo json_encode($result);//把php数组转换为字符串
//echo '<pre>';
//print_r($result);

?>