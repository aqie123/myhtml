$(function(){
    var posArr = [];//数组存储
    $('.main .list').each(function(){
    	alert($(this)[0].offsetLeft)

    })

	$('.page a').click(function(){
		var url = $(this).attr('href');
		$.ajax({
			type:'GET',
			url:url,
			data:'',
			dataType:'json',
			success:function(data){
				//alert(data)  拿到所有图片地址数据
				$('.main .list').remove();//清空.main div
				for(i in data){
					//alert(data[i]) 获取单个图片地址
					$('.main').append('<div class="list"><img src="'+data[i]+'" "alt="" width="" height=""></div>');

				}
			}//success函数
		})//ajax函数结束
		return false;
	})//click函数结束

})//主函数结束