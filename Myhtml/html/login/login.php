<!doctype html>
<html>
<head>
<meta charset="utf-8">
<meta name="Keywords" content="关键词123">
<meta name="Description" content="描述">
<link rel="shortcut icon" href="/picture/1.ico" />
 
<link href="../../css/login.css" rel="stylesheet" type="text/css" />
<!--登录css-->
<link href="../../css/8_skin.css" rel="stylesheet" type="text/css" />
<!--换肤css-->
<link href="../../css/3_.css" rel="stylesheet" type="text/css" />
<!--轮播广告css-->
<link href="../../css/5_timeline.css" rel="stylesheet" type="text/css" />
<!--时光轴css-->
<link href="../../css/7_lern.css" rel="stylesheet" type="text/css"/>
<!--六边形导航盒子CSS-->
<link href="../../css/8_mag.css" rel="stylesheet" type="text/css" />
<!--放大镜css-->
<link href="../../css/water.css" rel="stylesheet" type="text/css" />
<!--瀑布流css-->
<link rel="stylesheet" href="../../css/2_illu.css" type="text/css"/>
<!--图片特效css--><!-- 拖拽图片特效 -->
<link href="../../css/3ajax.css" rel="stylesheet" type="text/css" />
<!--ajax图片特效-->
<style type="text/css">

</style>
<title>登录框</title>
</head>

<body onload="setHeight()"">

<!--顶部导航栏BEGIN--> 
<div id="box">
     <span class="miku">
          <a href="http://www.poocg.com/works/view/648759" class="al" target="_blank">miku 赏花</a>
          <a href="##" class="a2"><img src="../../picture/8_img/1.png" alt=""></a>
     </span>
     <span class="btn">登陆</span><span class="btn1">注册</span>
</div>
<!--顶部导航栏END--> 

   
 <!--六个换肤图片缩略图START-->
<div id="dic">
     <ul>
         <li > <img src="../../picture/8_img/1-1.jpg" alt="" dataSrc="../../picture/8_img/1.jpg"></li>
         <li><img src="../../picture/8_img/2-2.jpg" alt="" dataSrc="../../picture/8_img/2.jpg"></li>
         <li><img src="../../picture/8_img/3-3.jpg" alt="" dataSrc="../../picture/8_img/3.jpg"></li>
         <li><img src="../../picture/8_img/4-4.jpg" alt="" dataSrc="../../picture/8_img/4.jpg"></li>
         <li><img src="../../picture/8_img/5-5.jpg" alt="" dataSrc="../../picture/8_img/5.jpg"></li>
         <li><img src="../../picture/8_img/6-6.jpg" alt="" dataSrc="../../picture/8_img/6.jpg"></li>
     </ul>

</div> 
<!--六个换肤图片缩略图END--> 

<div class="mask"></div> <!--遮罩层END-->

<!--注册页面BEGIN-->
<div class="login dl">
     <div class="title">用户注册<span class="close"></span>
     </div>
     <center><img src="../../picture/login/1.png" width="50px"  height="50px" alt="登录头像" ></center>

     <p class="text">人生若只如初见，何事秋风悲画扇。 
     等闲变却故人心，却道故人心易变。<br />
     骊山语罢清宵半，泪雨霖铃终不怨。
     何如薄幸锦衣郎，比翼连枝当日愿。</p>

     <div class="lg">
  <form action="../../php/login/regcheck1.php" method="post" name="form1" >
      
          <div class="name-field">
            <label for="">用户名：</label>
             <input type="text" value="请输入用户名" name="username" id="username"  />
               <span class="name_msg"><i class="fa-lightbulb-o">5-25个字符不包含数字</i></span>
               <div class="count">0个字符</div>
           </div>
           <div class="email-field" >
              <label>邮箱：</label>
              <input type="text" id="email" value="请输入邮箱" name="email"/><span class="msg email_msg" ></span>
              <span class="email_msg"><i class="fa-lightbulb-o"></i></span>
           </div>
          <div class="psw-field" >
               <label>密码：</label>
              <input type="password" id="psw" value="" name="password"/><span class="psw_msg"><i class=''>6-16个字符，不能单独使用字母、数字或符号</i></span>
              <div class="intensity">
                <span class="active">  弱</span><span>中</span><span>强</span>
              </div>
          </div>
         <div class="psw2-field" >
              <label>确认密码：</label>
              <input type="password" id="psw2"  value="" name="confirm" disabled="true"/><span class="msg psw2_msg"></span>
        </div>
        <div class="sub-field" >
         <input class="sub" type="submit" value="注册"  id ="submit" disabled="true" name="submit"/>
        </div>
        </form>
     </div>
</div>
<!--注册页面END-->

<!--登录页面BEGIN-->
<div class="login zc">
     <div class="title">用户登录<span class="close"></span>
     </div>
     <center><img src="../../picture/login/1.png" width="50px"  height="50px" alt="登录头像" ></center>

     <p class="text">人生若只如初见，何事秋风悲画扇。 
     等闲变却故人心，却道故人心易变。<br />
     骊山语罢清宵半，泪雨霖铃终不怨。
     何如薄幸锦衣郎，比翼连枝当日愿。</p>

     <div class="lg">
       <form action="../../php/login/logincheck.php" method="post" name="form2">
           
          <div class="name-field">
            <label for="">用户名：</label>
             <input type="text" value="请输入用户名" name="username" id="username2"  />
               <span class="name_msg"><i class="fa-lightbulb-o">5-25个字符</i></span>
           </div>
            <div class="psw-field" >
               <label>密码：</label>
              <input type="password" id="psw3" value="" name="password"/>
              <span class="psw_msg"><i class=''>6-16个字符，不能单独使用字母、数字或符号</i></span>
          </div>
         <div class="sub-field" >
           <input class="sub" type="submit" value="登录"  id ="submit2" disabled="true" name="submit"/>
        </div>
        </form>
     </div>
</div>
<!--登录页面END-->

<!--轮播广告页面BEGIN-->
<div class="banner">
  <div id="pic" class="pic"><!--八张广告图片BEGIN-->
      <ul>
        <li class="first"><img src="../../picture/3-img/1.jpg" alt="" width="1120px" height="350px"></li>
        <li><img src="../../picture/3-img/2.jpg" alt="" width="1120px" height="350px"></li>
        <li><img src="../../picture/3-img/3.jpg" alt="" width="1120px" height="350px"></li>
        <li><img src="../../picture/3-img/4.jpg" alt="" width="1120px" height="350px"></li>
        <li><img src="../../picture/3-img/5.jpg" alt="" width="1120px" height="350px"></li>
        <li><img src="../../picture/3-img/6.jpg" alt="" width="1120px" height="350px"></li>
        <li><img src="../../picture/3-img/7.jpg" alt="" width="1120px" height="350px"></li>
        <li><img src="../../picture/3-img/8.jpg" alt="" width="1120px" height="350px"></li>
      </ul>


  </div><!--八张广告图片END-->
  <div id="num_btn" class="num_btn">
      <ul>             <!-- ul>li.item$*8-->
        <li class="active">1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>7</li>
        <li>8</li>
      </ul><!--八张图片对应八个点-->
    
  </div>
  <div class="btn3 left">
    
  </div>
  <div class="btn3 right">
    
  </div>
</div>
<!--广告页面结束-->


<!--时光轴开始-->
<div class="con">
       <div class="top"><img src="../../picture/5_timeline/2.png"  width="300px" height="300px" alt="银质徽章">
         <p>皮卡丘</p>
       </div>  
  <div class="pic-list">
          <div class="content">
               <div class="pic">
                    <!-- 移动特效开始 -->
<div class="moon">
  <ul>
    <li><div class="item"><img src="../../picture/moonlight/a_01.gif" alt="月光宝盒" width="172px" height="98px"></div> </li>
    <li><div class="item"><img src="../../picture/moonlight/a_02.gif" alt="月光宝盒" width="172px" height="98px"></div> </li>
    <li><div class="item"><img src="../../picture/moonlight/a_03.gif" alt="月光宝盒" width="172px" height="98px"></div> </li>
    <li><div class="item"><img src="../../picture/moonlight/a_04.gif" alt="月光宝盒" width="172px" height="98px"></div> </li>
    <li><div class="item"><img src="../../picture/moonlight/a_05.gif" alt="月光宝盒" width="172px" height="98px"></div> </li>
    <li><div class="item"><img src="../../picture/moonlight/a_06.gif" alt="月光宝盒" width="172px" height="98px"></div> </li>
    <li><div class="item"><img src="../../picture/moonlight/a_07.gif" alt="月光宝盒" width="172px" height="98px"></div> </li>
    <li><div class="item"><img src="../../picture/moonlight/a_08.gif" alt="月光宝盒" width="172px" height="98px"></div> </li>
    <li><div class="item"><img src="../../picture/moonlight/a_09.gif" alt="月光宝盒" width="172px" height="98px"></div> </li>
  </ul>
</div>
<!-- 移动拖拽特效结束 -->    


                  
               </div>
               <div class="bq">
                    <span>2016/10/16</span>
                    <img src="../../picture/5_timeline/r.png" width="" height="" alt="">
                    <i></i><!-- 圆点-->
               </div>
          </div>
          <div class="content">
               <div class="pic">
                  <div class="magnifier"><!--放大镜开始-->
                  <img class="simg" src="../../picture/8_img/a.jpg" alt="" width="440px" height="300px">

                  <div class="move"></div>
                  <div class="bimg">
                    <img class="b-img" src="../../picture/8_img/a.jpg" alt="" width="440px" height="300px">
                  </div>
  
                </div><!--放大镜结束-->


               </div><!--图片结束-->


               <div class="bq">
                    <span>2016/10/17</span>
                    <img src="../../picture/5_timeline/r.png" width="" height="" alt="">
                    <i></i>
               </div>
          </div>
          <div class="content">
              <div class="pic">
                 <!-- 滑入滑出效果START-->
                <div class="illusion">
                      <ul>
                        <li><img src="../../picture/1_img/a3.jpg" alt="" width=" 160px  " height="140px">
                          <div class="info">
                           <h4>北境之皇女</h4>
                           <p>在古老的傳說中有一位美麗仙女因犯天條被囚禁在月亮上面，</p>
                          </div>
                        </li>
        
                        <li><img src="../../picture/1_img/a8.jpg" alt="" width="160px" height="140px">
                           <div class="info">
                            <h4>北境之皇女</h4>
                            <p>一天一天，一年一年直到她生命的盡頭靈感來自網上的一首笛音The unwordly beauty，</p>
                           </div>
                        </li>
                        <li><img src="../../picture/1_img/b2.jpg" alt="" width="160px" height="140px">
                             <div class="info">
                             <h4>北境之皇女</h4>
                             <p>沈浸在美妙旋律的同時這張作品也慢慢的在思緒中浮現,</p>
                             </div>
                        </li>
                        <li><img src="../../picture/1_img/b4.jpg" alt="" width="160px" height="140px">
                            <div class="info">
                            <h4>北境之皇女</h4>
                            <p>我常會聽到她美麗的笛聲當我一人獨處的時候,</p>
                             </div>
                        </li>
                        <li><img src="../../picture/1_img/b5.jpg" alt="" width="160px" height="140px">
                          <div class="info">
                          <h4>北境之皇女</h4>
                          <p>歌曲來自Oliver Shanti的The unwordly beauty.</p>
                            </div>
                        </li>
                        <li><img src="../../picture/1_img/b6.jpg" alt="" width="160px" height="140px">
                          <div class="info">
                          <h4>北境之皇女</h4>
                          <p>I was Imagine she play the flute when i paint her.</p>
                          </div>
                        </li>
                         <div style="clear:both;"> </div><!--控制外面边框显示-->
                    </ul>
              </div>
                <!-- 滑入滑出效果END-->
            </div>
               <div class="bq">
                    <span>2016/10/18</span>
                    <img src="../../picture/5_timeline/r.png" width="" height="" alt="">
                    <i></i>
               </div>
          </div>
          <div class="content">
               <div class="pic">
                   <!-- 滑入滑出效果2START-->
                  <div class="illusion2">
                      <ul>
                         <li><img src="../../picture/1_img/a1.jpg" alt="" width="160px" height="140px">
                            <p>北境之皇女</p>
                            <div class="topill"></div>
                            <div class="bottomill"></div>
                            <div class="leftill"></div>
                            <div class="rightill"></div>
                         </li>
                        <li><img src="../../picture/1_img/a2.jpg" alt="" width="160px" height="140px">
                            <p>北境之皇女</p>
                            <div class="topill"></div>
                            <div class="bottomill"></div>
                            <div class="leftill"></div>
                            <div class="rightill"></div></li>
                       <li><img src="../../picture/1_img/a4.jpg" alt="" width="160px" height="140px"> 
                            <p>北境之皇女</p>
                            <div class="topill"></div>
                            <div class="bottomill"></div>
                            <div class="leftill"></div>
                            <div class="rightill"></div>></li>
                       <li><img src="../../picture/1_img/a5.jpg" alt="" width="160px" height="140px">  
                            <p>北境之皇女</p>
                            <div class="topill"></div>
                            <div class="bottomill"></div>
                            <div class="leftill"></div>
                            <div class="rightill"></div></li>
                      <li><img src="../../picture/1_img/a6.jpg" alt="" width="160px" height="140px"> 
                            <p>北境之皇女</p>
                            <div class="topill"></div>
                            <div class="bottomill"></div>
                            <div class="leftill"></div>
                            <div class="rightill"></div></li>
                     <li><img src="../../picture/1_img/a7.jpg" alt="" width="160px" height="140px">    
                            <p>北境之皇女</p>
                            <div class="topill"></div>
                            <div class="bottomill"></div>
                            <div class="leftill"></div>
                            <div class="rightill"></div>></li>
                       <div style="clear:both;"> </div><!--控制外面边框显示-->
                  </ul>
                </div>
                 <!-- 滑入滑出效果2END-->
            </div>
               <div class="bq">
                    <span>2016/10/19</span>
                    <img src="../../picture/5_timeline/r.png" width="" height="" alt="">
                    <i></i>
               </div>
          </div>
          <div class="content">
              <div class="pic">
                 <!--ajax图片加载特效开始-->
                      <div class="main">
                          <div class="list">
                              <img src="../../picture/3ajax_img/a1.jpg" alt="" width="" height=""/>
                          </div>
                          <div class="list">
                             <img src="../../picture/3ajax_img/a2.jpg" alt="" width="" height=""/>
                          </div>
                          <div class="list">
                             <img src="../../picture/3ajax_img/a3.jpg" alt="" width="" height=""/>
                          </div>
                          <div class="list">
                             <img src="../../picture/3ajax_img/a4.jpg" alt="" width="" height=""/>
                          </div>
                             <div class="list">
                              <img src="../../picture/3ajax_img/a5.jpg" alt="" width="" height=""/>
                          </div>
                          <div class="list">
                             <img src="../../picture/3ajax_img/a6.jpg" alt="" width="" height=""/>
                          </div>
                          <div class="list">
                              <img src="../../picture/3ajax_img/a7.jpg" alt="" width="" height=""/>
                          </div>
                          <div class="list">
                              <img src="../../picture/3ajax_img/a8.jpg" alt="" width="" height=""/>
                           </div>
                          <div class="list">
                               <img src="../../picture/3ajax_img/a7.jpg" alt="" width="" height=""/>
                          </div>
                          <div class="list">
                               <img src="../../picture/3ajax_img/a6.jpg" alt="" width="" height=""/>
                         </div>
                         <div class="list">
                               <img src="../../picture/3ajax_img/a5.jpg" alt="" width="" height=""/>
                         </div>
                         <div class="list">
                               <img src="../../picture/3ajax_img/a4.jpg" alt="" width="" height=""/>
                         </div>
                      </div>
                        <div class="page">
                           <a href="../../php/3ajax/3_ajax.php?page=1">1</a>
                           <a href="../../php/3ajax/3_ajax.php?page=2">2</a>
                           <a href="../../php/3ajax/3_ajax.php?page=3">3</a> 
                        </div>
                 <!--特效结束ajax图片加载-->
              </div> 
               <div class="bq">
                    <span>2016/10/20</span>
                    <img src="../../picture/5_timeline/r.png" width="" height="" alt="">
                    <i></i>
               </div>
          </div>
          <div class="content">
              <div class="pic">
                <!--六边形导航盒子START-->
                     <div class="c1">
                       <div class="navhex">
                           <ul>
                              <li><a href="https://www.baidu.com/" target="_blank"><img src="../../picture/7_img/1.png" alt="解释说明" width="49"  height="49"></a></li>
                              <li><img src="../../picture/7_img/2.png" alt="解释说明" width="49"  height="49"></li>
                              <li><img src="../../picture/7_img/3.png" alt="解释说明" width="49"  height="49"></li>
                              <li><img src="../../picture/7_img/4.png" alt="解释说明" width="49"  height="49"></li>
                              <li><img src="../../picture/7_img/5.png" alt="解释说明" width="49"  height="49"></li>
                              <li class="six"><img src="../../picture/7_img/6.png" alt="解释说明" width="49"  height="49"></li>
                              <li><img src="../../picture/7_img/7.png" alt="解释说明" width="49"  height="49"></li>
                             <li><img src="../../picture/7_img/8.png" alt="解释说明" width="49"  height="49"></li>
                             <li><img src="../../picture/7_img/9.png" alt="解释说明" width="49"  height="49"></li>
                             <li><img src="../../picture/7_img/10.png" alt="解释说明" width="49"  height="49"></li>
                             <li><img src="../../picture/7_img/11.png" alt="解释说明" width="49"  height="49"></li>
                             <li><img src="../../picture/7_img/12.png" alt="解释说明" width="49"  height="49"></li>
                             <li><img src="../../picture/7_img/13.png" alt="解释说明" width="49"  height="49"></li>
                             <li><img src="../../picture/7_img/14.png" alt="解释说明" width="49"  height="49"></li>              
                          </ul>
                       </div>

                     </div>
                  <!--六边形导航盒子END-->
             </div>
               <div class="bq">
                    <span>2016/10/21</span>
                    <img src="../../picture/5_timeline/r.png" width="" height="" alt="">
                    <i></i>
               </div>
          </div>
          <div class="content">
               <div class="pic">
                  <img src="../../picture/5_timeline/anli2.gif" width="80%" height="80%" alt=""  vertical-align="middle"; >
                        
               </div>
               <div class="bq">
                    <span>2016/10/22</span>
                    <img src="../../picture/5_timeline/r.png" width="" height="" alt="">
                    <i></i>
               </div>
          </div>
          <div class="content">
               <div class="pic"></div>
               <div class="bq">
                    <span>2016/10/23</span>
                    <img src="../../picture/5_timeline/r.png" width="" height="" alt="">
                    <i></i>
               </div>
          </div>

  </div><!--piclist 结束-->
</div><!--时光轴结束-->


<!--瀑布流开始-->
<div class="waterfall" >

    <ul>
       <li></li>
       <li></li>
       <li></li>
       <li></li>
       
       
       <div style="clear:both;"> </div><!--控制外面边框显示-->
    </ul>


</div>

<!--瀑布流END-->


                



<script src="../../js/jquery-3.1.1.js" type="text/javascript"></script>
 <script src="../../js/login.js" type="text/javascript"></script> 
<!--登录注册js-->
 <script src="../../js/8_skin.js"></script> 
<!--百度换肤js-->
 <script src="../../js/carousel.js"></script> 
<!--轮播广告js-->
 <script src="../../js/5_timeline.js" type="text/javascript"></script> 
<!--时光轴js-->
 <script src="../../js/8_mag.js" type="text/javascript"></script>
<!--放大镜js-->
<script src="../../js/water.js" type="text/javascript"></script> 
<!--瀑布流js-->
 <script type="text/javascript" src="../../js/2_illusion.js"></script> 
<!--图片特效js-->
<script src="../../js/3ajax.js" type="text/javascript"></script> 
<!--ajax3动态加载图片-->

<script type="text/javascript">

</script>
</body>
</html>



