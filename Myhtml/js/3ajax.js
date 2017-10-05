	$(function(){
		var posarr = [];//目标点存储位置
		var l,t;
		$('.con .pic-list .content .pic .main .list').each(function(i){
			//alert($(this)[0].offsetLeft)
			l = $(this)[0].offsetLeft;
			t = $(this)[0].offsetTop;
			posarr[i] = {left:l,top:t};
		})
		$('.con .pic-list .content .pic .main .list').each(function(n){
			//alert(posarr[n].left)
			$(this).css({position:'absolute',left:posarr[n].left,top:posarr[n].top})

		})
		$('.page a').click(function(){
			var url = $(this).attr('href');
			//alert(url);
			$.ajax({
				type:'GET',
				url:url,
				data:'',
				dataType:'json',
				success:function(data){
					hiddenlist(data)

				}//请求错误，请求完成
			})// ajax请求结束

			return false;

		})//点击函数结束,已经成功加载图片
		
//动画开始
        function hiddenlist(data){//收起图片
        	var aList = $('.main .list');
        	var index = aList.length;
			var iNow = index;
        	var t= setInterval(function(){
						aList.eq(index).animate({
							left:200,
							top:280,
							opacity:0
						},800,'',function(){//回调函数
							iNow--
							if(iNow <=0){
								loadList(data);//收起结束，调用load函数

							}

						});
						if(index>0){
							index--;
						}else{
							clearInterval(t);
						}
						

					},60)


        }//hiddenlist函数结束

    	function loadList(data){//展开图片
    		$('.main .list').remove();
					//alert(data);
					for(i in data){
						$('.main').append('<div class="list"><img src="'+data[i]+'" alt="" width="" height=""></div>');
					  $('.main .list').eq(i).css({//注意空格
						left:200,
						top:280,
						position:'absolute',//绝对定位
						opacity:0

					  })
					}//for in
					//$('.main .list').each(function(index){
						

					//})
					var index = 0;
					var aList = $('.main .list');

					//alert(aList.length)
					//return;
				var t= setInterval(function(){
						aList.eq(index).animate({
							left:posarr[index].left,
							top:posarr[index].top,
							opacity:1
						},800);
						if(index<aList.length-1){
							index++;
						}else{
							clearInterval(t);
						}
						

					},60)

    	} //loadlist函数


		
	})//总的function结束
