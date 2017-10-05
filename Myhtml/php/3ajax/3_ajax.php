<?php 
//sleep(3);

$db = include '3db.php';
$page = $_GET['page'];
$num =12;
$start =($page-1)*$num;
$end = $start+$num;
$data =array();
for($i =$start;$i<$end;$i++){
	$data[] = $db[$i];
}
exit(json_encode($data));

?>