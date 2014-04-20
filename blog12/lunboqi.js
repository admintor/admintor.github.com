window.onload=function () {
	$('#banner img').opacity(0);
	$('#banner img').eq(0).opacity(100);
	$('#banner ul li').eq(0).css('color','#333');
	$('#banner strong').html($('#banner img').eq(0).attr('alt'));
	var banner_index=1;
	var banner_type=3;
	var banner_timer=setInterval(banner_fn,3000);
	$('#banner ul li').hover(function(){
		clearInterval(banner_timer);
		if ($(this).css('color')!='rgb(51,51,51)') {
			banner(this,banner_index==0?$('#banner ul li').length()-1:banner_index-1);
		};
	},function(){
		banner_index=$(this).index()+1;
		banner_timer=setInterval(banner_fn,3000);
	});
	function banner(obj,prev){
		$('#banner ul li').css('color','#999');
		$(obj).css('color','#333');
		$('#banner strong').html($('#banner img').eq($(obj).index()).attr('alt'));
		//$('#banner img').eq(prev).opacity(100);
		if (banner_type==3) {
			$('#banner img').eq(prev).animate({
				attr:'x',
				target:900,
				t:30,
				step:10
			}).css('zIndex',1);
			$('#banner img').eq($(obj).index()).animate({
				attr:'x',
				target:0,
				t:30,
				step:10
			}).css('zIndex',2).css('left','-900px').opacity(100);
		}else if(banner_type==2){
			$('#banner img').eq(prev).animate({
				attr:'y',
				target:150,
				t:30,
				step:10
			}).css('zIndex',1).opacity(0);
			$('#banner img').eq($(obj).index()).animate({
				attr:'y',
				target:0,
				t:30,
				step:10
			}).css('zIndex',2).css('top','-150px').opacity(100);
		}
	}
	function banner_fn(){
		if (banner_index>=$('#banner ul li').length()) {
			banner_index=0;
		};
		banner($('#banner ul li').eq(banner_index).first(),banner_index==0?$('#banner ul li').length()-1:banner_index-1);
		banner_index++;
	}
}