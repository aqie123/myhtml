<!doctype html>
<html>
<head>
<meta charset="utf-8">
<meta name="Keywords" content="关键词123">
<meta name="Description" content="描述">
<link rel="shortcut icon" href="/picture/1.ico" />
<!-- 
<link href="./css/taobao2.css" rel="stylesheet" type="text/css" />
-->
<style type="text/css">
.poet{          /*古诗排版*/
  margin: 50px auto 0px;
  
  line-height:30px; 
  text-align: center;
  color:#0F3ED0;
  font-weight: bolder;
}
</style>
<title></title>
</head>

<body>
<div class="poet">
  <h2 >长恨歌</h2>
  <p >白居易</p>
 <?php
  /*
   function file_utf8($filepath){
    $f_contents= file_get_contents($filepath);
    
    $encoding = mb_detect_encoding($f_contents, array('GB2312','GBK','UTF-16','UCS-2','UTF-8','BIG5','ASCII','ANSI'));
    $content_u="";
     $handle = fopen("../../text/1.txt", "r")
     // 输出单行直到 end-of-file
     if($handle){
       while(!feof($myfile)) {
        $buffer= fgets($handle);
          if ($encoding != false) {
              if (mb_detect_encoding($buffer)!='UTF-8'){
                $buffer = iconv($encoding, 'UTF-8', $buffer);
              }
          }else{
            $buffer = mb_convert_encoding ( $buffer, 'UTF-8','Unicode');
           }
        $content_u.=$buffer;
       }
        fclose($handle);
        return $info=array('status'=>1,'message'=>$content_u);
     }else{
       return $info=array('status'=>0,'message'=>'打开文件失败');
     }
 }
  */


  $myfile = fopen("../../text/2.txt", "r") or die("Unable to open file!");
    // 输出单行直到 end-of-file
    while(!feof($myfile)) {
    echo fgets($myfile) . "<br>";
  }
   fclose($myfile);


 ?> 
</div>

<script src="./js/jquery-3.1.1.js" type="text/javascript"></script>
<script type="text/javascript"></script>


</body>
</html>
