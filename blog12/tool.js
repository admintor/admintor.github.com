(function(){
	window.sys={};
	var ua=navigator.userAgent.toLowerCase();
	var s;
	(s=ua.match(/msie([\d.]+)/))?sys.ie=s[1]:
	(s=ua.match(/firefox\/([\d.]+)/))?sys.firefox=s[1]:
	(s=ua.match((/chrome\/([\d.]+)/)))?sys.chrome=s[1]:
	(s=ua.match(/opera\/.*version\/([\d.]+)/))?sys.opera=s[1]:
	(s=ua.match(/version\/([\d.]+).*safari/))?sys.safari=s[1]:0;
})();
function getInner(){
	if(typeof window.innerWidth!='undefined'){
		return {
			width:window.innerWidth,
			height:window.innerHeight
		}
	}else{
		return {
			width:document.documentElement.clientWidth, 
			height:document.documentElement.clientHeight
		}
	}
}

function getStyle(element,attr){
	if(typeof window.getComputedStyle!='undefined'){
		return window.getComputedStyle(element,null)[attr];
	}else if(typeof element.currentStyle!='undefined'){
		return element.currentStyle[attr];
	}
}
function addEvent(obj,type,fn){
	if(typeof obj.addEventListener!='undefined'){
		obj.addEventListener(type,fn,false);
	}else{
		if (!obj.events) obj.events={};
		if(!obj.events[type]){
			obj.events[type]=[];
			if(obj['on'+type]) obj.events[type][0]=fn;
		}
		obj.events[type][addEvent.ID++]=fn;
		obj['on'+type]=function(){
			for(var i in obj.events[type]){
				obj.events[type][i]();
			}
		}
	}
}
addEvent.ID=1;
function removeEvent(obj,type,fn){
	if(typeof obj.removeEventListener!='undefined'){
		obj.removeEventListener(type,fn,false);
	}else{}
}
function scrollTop(){
	document.documentElement.scrollTop=0;
	document.body.scrollTop=0;
}
function trim(str){
	return str.replace(/(^\s*)|(^\s*$)/g,'');
}
function getScroll(){
	return{
		top:document.documentElement.scrollTop||document.body.scrollTop,
		left:document.documentElement.scrollLeft||document.body.scrollLeft,
	}
}
function offsetTop(element){
	var top=element.offsetTop;
	var parent=element.offsetParent;
	while(parent!=null){
		top+=parent.offsetTop;
		parent=parent.offsetParent;
	}
	return top;
}
function prevIndex(current,parent){
	var length=parent.children.length;
	if(current==0)return length-1;
	return parseInt(current)-1;
}
function nextIndex(current,parent){
	var length=parent.children.length;
	if(current==length-1)return 0;
	return parseInt(current)+1;
}
function predef(e){
	e.preventDefault();
}
function fixedScroll(){
	setTimeout(function(){
		window.scrollTo(fixedScroll.left,fixedScroll.top);
	},100);
}
function setCookie(name,value,expires,path,domain,secure){
	var cookieText=encodeURIComponent(name)+'='+encodeURIComponent(value);
	//alert(cookieText);
	if(expires instanceof Date){
		cookieText+=';expires='+expires;
	}
	if(path){
		cookieText+=';path='+path;
	}
	if(domain){
		cookieText+=';domain='+domain;
	}
	if(secure){
		cookieText+=';secure';
	}
	document.cookie=cookieText;
}
function getCookie(name){
	var cookieName=encodeURIComponent(name)+'=';
	//alert(cookieName);
	var cookieStart=document.cookie.indexOf(cookieName);
	//alert(cookieStart);
	var cookieValue=null;
	if(cookieStart>-1){
		var cookieEnd=document.cookie.indexOf(';',cookieStart);
		//alert(cookieEnd);
		if(cookieEnd==-1){
			var cookieEnd=document.cookie.length;
		}
		cookieValue=decodeURIComponent(document.cookie.substring(cookieStart+cookieName.length,cookieEnd));
	}
	return cookieValue;
}
function unsetCookie(name){
	document.cookie=name+'=;expires='+new Date(0);
}
function setCookieDate(day){
	var date=null;
	if(typeof day=='number'&&day>0){
		date=new Date();
		date.setDate(date.getDate()+day);
	}else{
		throw new Error('你传递的天数不合法！必须是数字并且大于零');
	}
	return date;
}