window.onload=function () {
	 $('#banner img').opacity(0);
	 $('#banner img').eq(0).opacity(100);
	 $('#banner ul li').eq(0).css('color','#333');
	 $('#banner strong').html($('#banner img').eq(0).attr('alt'));
}