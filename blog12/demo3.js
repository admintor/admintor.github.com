window.onload=function(){
	 $('.member').hover(function(){
	 	$(this).css('background','gray');
	 	$('#header ul').show().animate({
	 		t:30,
	 		step:10,
	 		mul:{
	 			o:100,
	 			h:100
	 		}
	 	});
	 },function(){
	 	$(this).css('background','#ccc');
	 	$('#header ul').animate({
	 		step:20,
	 		t:10,
	 		mul:{
	 			o:0,
	 			h:0
	 		},
	 		fn:function(){
	 			$('#header ul').hide();
	 		}
	 	});
	 });
	var login=$('#login');
	 login.center(400,300).resize(function(){
	 	//login.center(400,300);
	 	if(login.css('display')=='block'){
	 		$('#screen').lock();
	 	}
	 });
	 $('#header .login').click(function(){
	 	login.center(400,300)
	 	login.css('display','block');
	 	$('#screen').lock().animate({
	 		'attr':'o',
	 		'target':65,
	 		'step':10,
	 		't':30
	 	});
	 });
	 $('#login .close').click(function(){
	 	login.css('display','none');
	 	$('#screen').animate({
	 		'attr':'o',
	 		'target':0,
	 		'step':10,
	 		't':30,
	 		fn:function(){
	 			$('#screen').unlock();
	 		}
	 	});
	 });
	 login.drag();
	 $('#share').css('top',getScroll().top+(getInner().height-parseInt(getStyle($('#share').nodes[0],'width')))/2+'px');
	 	addEvent(window,'scroll',function(){
	 		setTimeout(function(){
	 			$('#share').animate({
	 		 	'attr':'y',
	 		 	'target':getScroll().top+(getInner().height-parseInt(getStyle($('#share').nodes[0],'width')))/2
	 		 	});
	 		},100);
	 		 //console.log(getScroll().top+(getInner().height-parseInt(getStyle($('#share').nodes[0],'width')))/2);
	 	});
	 $('#share').hover(function(){
	 	$('#share').animate({
	 		'attr':'x',
	 		'target':0
	 	});
	 },function(){
	 	$('#share').animate({
	 		'attr':'x',
	 		'target':-211
	 	});
	 });
	 $('#sidebar h2').toggle(function(){
	 	$(this).next().animate({
	 		mul:{
	 			h:0,
	 			o:0
	 		}
	 	});
	 },function(){
	 	$(this).next().animate({
	 		mul:{
	 			h:150,
	 			o:100 
	 		}
	 	});
	 });
	 //初始化
	 $('#banner img').opacity(0);
	 $('#banner img').eq(0).opacity(100);
	 $('#banner ul li').eq(0).css('color','#333');
	 $('#banner strong').html($('#banner img').eq(0).attr('alt'));
	 var banner_index=1;
	 //轮播器的样式
	 var banner_type=3;
	 var banner_timter=setInterval(banner_fn,2000);
	 $('#banner ul li').hover(function(){
	 	clearInterval(banner_timter);
	 	//alert($(this).css('color'));
	 	if($(this).css('color')!='rgb(51, 51, 51)'){
	 		banner(this,banner_index==0?$('#banner ul li').length()-1:banner_index-1);
	 	}
	 },function(){
	 	banner_index=$(this).index()+1;
	 	banner_timter=setInterval(banner_fn,3000);
	 });
	 function banner(obj,prev){
	 		$('#banner ul li').css('color','#999');
	 		$(obj).css('color','#333');
	 		$('#banner strong').html($('#banner img').eq($(obj).index()).attr('alt'));
	 		if(banner_type==1){
	 			$('#banner img').eq(prev).animate({
	 				attr:'o',
	 				target:0,
	 				t:30,
	 				step:10
	 			}).css('zIndex',1);
	 			$('#banner img').eq($(obj).index()).animate({
	 				attr:'o',
	 				target:100,
	 				t:30,
	 				step:10
	 			}).css('zIndex',2);
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
	 		}else if(banner_type==3){
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
	 		}
	 }
	 function banner_fn(){
	 	if(banner_index>=$('#banner ul li').length()){
	 			banner_index=0;
	 	}
	 	banner($('#banner ul li').eq(banner_index).first(),banner_index==0?$('#banner ul li').length()-1:banner_index-1);
	 	banner_index++;
	 }
	// $('.wait_load').eq(0).attr('src',$('.wait_load').eq(0).attr('xsrc'));
	var wait_load=$('.wait_load');
	//wait_load.opacity(0);
	 addEvent(window,'scroll',_wait_load);
	 addEvent(window,'resize',_wait_load);
	 function _wait_load(){
	 		setTimeout(function(){
	 			//console.log($('photo dl dt'));
	 			for(var i=0;i<$('.wait_load').length();i++){
	 				var _this=wait_load.ge(i);
	 				var juli=getInner().height+getScroll().top;
	 				if (juli>=offsetTop(_this)) {
	 					$(_this).attr('src',$(_this).attr('xsrc'));
	 				}
	 			}
	 		},100);
	 }
	 var big=$('#photo_big');
	 big.center(620,511).resize(function(){
	 	//login.center(400,300);
	 	if(big.css('display')=='block'){
	 		$('#screen').lock();
	 	}
	 });
	 $('#photo dl dt img').click(function(){
	 	big.center(620,511);
	 	big.css('display','block');
	 	$('#photo_big .show').attr('src',$('.wait_load').attr('xsrc'));
	 	$('#screen').lock().animate({
	 		'attr':'o',
	 		'target':100,
	 		'step':10,
	 		't':30
	 	});
	 	var temp_img=new Image();
	 	addEvent(temp_img,'load',function(){
	 		$('#photo_big .big img').attr('src',temp_img.src).animate({
	 			attr:'o',
	 			target:100,
	 			t:30,
	 			step:10
	 		}).css('width','600px').css('height','450px').css('top',0).opacity(0);
	 	});
	 	temp_img.src=$(this).attr('bigsrc');
	 	var children=this.parentNode.parentNode;
	 	prev_next_img(children);
	 	
	 	
	 });
	 $('#photo_big .close').click(function(){
	 	big.css('display','none');
	 	$('#screen').animate({
	 		'attr':'o',
	 		'target':0,
	 		'step':10,
	 		't':30,
	 		fn:function(){
	 			$('#screen').unlock();
	 		}
	 	});
	 });
	 big.drag();
	 $('#photo_big .big .left').hover(function(){
	 	$('#photo_big .big .sl').animate({
	 		attr:'o',
	 		target:50,
	 		t:30,
	 		step:10
	 	});
	 },function(){
	 	$('#photo_big .big .sl').animate({
	 		attr:'o',
	 		target:0,
	 		t:30,
	 		step:10
	 	});
	 });
	 $('#photo_big .big .right').hover(function(){
	 	$('#photo_big .big .sr').animate({
	 		attr:'o',
	 		target:50,
	 		t:30,
	 		step:10
	 	});
	 },function(){
	 	$('#photo_big .big .sr').animate({
	 		attr:'o',
	 		target:0,
	 		t:30,
	 		step:10
	 	});
	 });
	 $('#photo_big .big .left').click(function(){
	 	$('#photo_big .big img').attr('src','images/loading.gif').css('width','32px').css('height','32px').css('top','190px');
	 	var current_img=new Image();
	 	addEvent(current_img,'load',function(){
	 		$('#photo_big .big img').attr('src',current_img.src).animate({
	 			attr:'o',
	 			target:100,
	 			t:30,
	 			step:10
	 		}).opacity(0).css('width','600px').css('height','450px').css('top','0px');
	 	});
	 	current_img.src=$(this).attr('src');
	 	var children=$('#photo dl dt img').ge(prevIndex($('#photo_big .big img').attr('index'),$('#photo').first())).parentNode.parentNode;
	 	prev_next_img(children);
	 	//alert(nextIndex($('#photo_big .big img').attr('index'),$('#photo').first()));
	 });
	 $('#photo_big .big .right').click(function(){
	 	$('#photo_big .big img').attr('src','images/loading.gif').css('width','32px').css('height','32px').css('top','190px');
	 	var current_img=new Image();
	 	addEvent(current_img,'load',function(){
	 		$('#photo_big .big img').attr('src',current_img.src).animate({
	 			attr:'o',
	 			target:100,
	 			t:30,
	 			step:10
	 		}).opacity(0).css('width','600px').css('height','450px').css('top','0px');
	 	});
	 	current_img.src=$(this).attr('src');
	 	var children=$('#photo dl dt img').ge(nextIndex($('$photo_big .big img').attr('index'),$('#photo').first())).parentNode.parentNode;
	 	prev_next_img(children);
	 });
	 function prev_next_img(children){
	 	var prev=prevIndex($(children).index(),children.parentNode);
	 	var next=nextIndex($(children).index(),children.parentNode);
	 	
	 	var prev_img=new Image();
	 	var next_img=new Image();

	 	prev_img.src=$('#photo dl dt img').eq(prev).attr('bigsrc');
	 	next_img.src=$('#photo dl dt img').eq(next).attr('bigsrc');
	 	$('#photo_big .big .left').attr('src',prev_img.src);
	 	$('#photo_big .big .right').attr('src',next_img.src);
	 	$('#photo_big .big img').attr('index',$(children).index());
	 	$('#photo_big .big .index').html(parseInt($(children).index())+1+'/'+$('#photo dl dt img').length());
	 }
	$('form').eq(0).form('sub').click(function(){
		/*console.log($('form').eq(0).serialize());
		var u={};
		var pass=$('.pass input').first();
		u[user.name]=user.value;
		u[pass.name]=pass.value;*/
		var user=$('.user input').first();
		var _this=this;
		if(/[\w]{2,20}/.test(trim(user.value))){
			$('#loading').css('display','block').center(200,150);
			$(this).css('background','red');
			$('#loading p').html('正在尝试登陆.....');
			ajax({
		  		method:'post',
		  		url:'test.php',
		  		data:$('form').eq(0).serialize(),
		 		success:function(text){
		  			$('#loading').css('display','none')
		  			if(text==1){
		  				$('#suc').css('display','block').center(200,150);
						$('#suc p').html('登陆成功.....');
						setCookie('user',user.value,setCookieDate(2));
		  				setTimeout(function(){
		  					$('#suc').css('display','none');
		  					login.css('display','none');
						 	$('#screen').animate({
						 		'attr':'o',
						 		'target':0,
						 		'step':10,
						 		't':30,
						 		fn:function(){
						 			$('#screen').unlock();
						 		}
						 	});
						 	$('form').first().reset();
						 	$(_this).css('background','green');
						 	$('#header .login').css('display','none');
		  					$('#header .login_info').css('display','block');
		  					$('#header .login_info').html(getCookie('user')+' 你好！');
		  				},1500);
					}else if(text==0){
		  				$('#login .info').html('用户名或者密码不正确');
		  				$(_this).css('background','green');
		  			}
		  		},
		 		async:true
		  	});
		}else{
			$('#login .info').html('用户名或者密码不合法');
		}
	});
	$('.member_ul li').eq(3).click(function(){
		if(document.cookie){
			unsetCookie('user');
			$('#suc').css('display','block').center(200,150);
			$('#suc p').html('正在退出.....');
			
		}
		if(!document.cookie){
			setTimeout(function(){
				$('#header .login_info').css('display','none');
				$('#header .login_info').html('');
				$('#suc').css('display','none');
				$('#suc p').html('');
				$('#header .login').css('display','block');
			},2500);
		}
		$('#loading').css('display','block').center(200,150);
			$('#loading p').html('请登录');
			setTimeout(function(){
				$('#loading').css('display','none');
				$('#loading p').html('');
			},1000);
	});
	if(document.cookie){
		$('#header .login').css('display','none');
		$('#header .login_info').css('display','block');
		$('#header .login_info').html(getCookie('user')+' 你好！');
	}else{
		$('#header .login').css('display','block');
		$('#header .login_info').css('display','none');
		$('#header .login_info').html('');
	};
	 $('#blog').center(400,300).resize(function(){
	 	if(login.css('display')=='block'){
	 		$('#screen').lock();
	 	}
	 });
	$('.member_ul li').eq(0).click(function(){
		if(document.cookie){
			$('#blog').center(400,300)
	 		$('#blog').css('display','block');
	 		$('#screen').lock().animate({
	 			'attr':'o',
	 			'target':65,
	 			'step':10,
	 			't':30
	 		});
		}else{
			$('#loading').css('display','block').center(200,150);
			$('#loading p').html('请登录');
			setTimeout(function(){
				$('#loading').css('display','none');
				$('#loading p').html('');
			},1500);
		}
	});
	 $('#blog h2 img').click(function(){
	 	$('#blog').css('display','none');
	 	$('#screen').animate({
	 		'attr':'o',
	 		'target':0,
	 		'step':10,
	 		't':30,
	 		fn:function(){
	 			$('#screen').unlock();
	 		}
	 	});
	 });
	 $('form').eq(1).form('sub').click(function(){
	 	//console.log();
		var u={};
		var name=getCookie('user');
		var title=$('form').eq(1).form('title').value();
		var content=$('#blog .content').html();
		u[$('form').eq(1).form('title').name()]=title;
		u['content']=content;
		u['user']=name;
		var _this=this;
		_this.disabled=true;
		//console.log($('form').eq(1).serialize());
		if(trim($('form').eq(1).form('title').value()).length<=0||trim($('form').eq(1).form('sub').value()).length<=0){
			$('#blog .info').html('请填写内容！');
		}else{
			$('#loading').css('display','block').center(200,150);
			$('#loading p').html('正在发表博文.....');
			$(_this).css('background','gray');
			ajax({
		  		method:'post',
		  		url:'add_blog.php',
		  		data:$('form').eq(1).serialize(),
		 		success:function(text){
		  			$('#loading').css('display','none');
		  			if(text==1){
		  				$('#suc').css('display','block').center(200,150);
						$('#suc p').html('发表成功.....');
		  				setTimeout(function(){
		  					$('#suc').css('display','none');
		  					$('#blog').css('display','none');
						 	$('#screen').animate({
						 		'attr':'o',
						 		'target':0,
						 		'step':10,
						 		't':30,
						 		fn:function(){
						 			$('#screen').unlock();
						 		}
						 	});
						 	$('form').last().reset();
						 	$(_this).css('background','red');
						 	_this.disabled=false;
		  				},1500);
					}
		  		},
		 		async:true
		  	});
		}
	});
}