 var $=function(args){
	return new Base(args);
}
function Base(args){
	//把获取到的内容先放在数组内，方便使用
	this.nodes=[];
	if(typeof args=='string'){
		if(args.indexOf(' ')!=-1){
			var elements=args.split(' ');
			var parentElements=[];
			var theNode=[];
			for(var i=0;i<elements.length;i++){
				if(theNode.length==0)theNode.push(document);
				switch(elements[i].charAt(0)){
					case '#':
					//alert('ok #');
						parentElements=[];
						parentElements.push(this.getId(elements[i].substring(1)));
						theNode=parentElements;
						break;
					case '.':
					//alert('ok .');
						parentElements=[];
						for(var j=0;j<theNode.length;j++){
							var temps=this.getClass(elements[i].substring(1),theNode[j]);
							for(var k=0;k<temps.length;k++){
								parentElements.push(temps[k]);
							}
						}
						theNode=parentElements;
						break;
					default:
					//alert('ok');
						parentElements=[];
						for(var j=0;j<theNode.length;j++){
							var temps=this.getTagName(elements[i],theNode[j]);
							for(var k=0;k<temps.length;k++){
								parentElements.push(temps[k]);
							}
						}
						theNode=parentElements;
				}
			}
			this.nodes=parentElements;
		}else{
			switch(args.charAt(0)){
				case '#':
					this.nodes.push(this.getId(args.substring(1)));
					break;
				case '.':
					this.nodes=this.getClass(args.substring(1));
					break;
				default:
					this.nodes=this.getTagName(args);
			}
		}
	}else if(typeof args=='object'){
		if(args!=undefined){
			this.nodes[0]=args;
		}
	}else if(typeof args=='function'){
		//(args)();
		//alert('ob');
	}
}
Base.prototype.getId=function(id){
	return document.getElementById(id);
}
Base.prototype.getTagName=function(tag,parentNode){
	var node=null;
	var temps=[];
	if(parentNode !=undefined){
		node=parentNode;
	}else{
		node=document;
	}
	var tags=node.getElementsByTagName(tag);
	for(var j=0;j<tags.length;j++){
		temps.push(tags[j]);
	}
	return temps;
}
//获取class节点数组
Base.prototype.getClass=function(className,parentNode){
	var node=null;
	var temps=[];
	if(parentNode!=undefined){
		node=parentNode;
	}else{
		node=document;
	}
	var all=node.getElementsByTagName('*');
	for (var i = 0; i < all.length; i++) {
		if(all[i].className==className){
			temps.push(all[i]);
		}
	};
	return temps;
}
Base.prototype.find=function(str){
	var childElements=[];
	for (var i = 0; i < this.nodes.length; i++) {
		switch(str.charAt(0)){
			case '#':
				childElements.push(this.getId(str.substring(1)));
				break;
			case '.':
				var temps=this.getClass(str.substring(1),this.nodes[i]);
				for(var j=0;j<temps.length;j++){
					if(all[j].className==str.substring(1)){
						childElements.push(temps[j]);
					}
				}
				break;
			default:
			var temps=this.getTagName(str,this.nodes[i]);
			for(var j=0;j<tags.length;j++){
				childElements.push(tags[j]);
			}
		}
	}
	this.nodes=childElements;
	return this;
}
Base.prototype.opacity=function(num){
	for (var i = 0; i < this.nodes.length; i++) {
		this.nodes[i].style.opacity=num/100;
	}
	return this;
};
//设置和获取元素的css样式
Base.prototype.css= function(attr,value) {
	for (var i = 0; i < this.nodes.length; i++) {
		if(arguments.length==1){
			return getStyle(this.nodes[i],attr);
		}
		this.nodes[i].style[attr]=value;
	};
	return this;
}
//给节点设置click行为
Base.prototype.click = function(fn) {
	for (var i = 0; i < this.nodes.length; i++) {
		this.nodes[i].onclick=fn;
	};
	return this;
}
//设置和获取元素的内容
Base.prototype.html = function(str) {
	for (var i = 0; i < this.nodes.length; i++) {
		if(arguments.length==0){
			return this.nodes[i].innerHTML;
		}
		this.nodes[i].innerHTML=str;
	}
	return this;
}
//获取指定的元素
Base.prototype.getElement=function(num){
	var node=this.nodes[num];
	this.nodes=[];
	this.nodes[0]=node;
	return this;
}
Base.prototype.eq=function(num){
	var element=this.nodes[num];
	this.nodes=[];
	this.nodes[0]=element;
	return this;
};
Base.prototype.ge=function(num){
	return this.nodes[num];
}
Base.prototype.first=function(){
	return this.nodes[0];
};
Base.prototype.last=function(){
	return this.nodes[this.nodes.length-1];
};
Base.prototype.length=function(){
	return this.nodes.length;
};
Base.prototype.attr=function(attr,value){
	for (var i = 0; i < this.nodes.length; i++) {
		if(arguments.length==1){
			return this.nodes[0].getAttribute(attr);
		}else if(arguments.length==2){
			this.nodes[i].setAttribute(attr,value);
		}
		
	}
	return this;
};
Base.prototype.index=function(){
	var chilen=this.nodes[0].parentNode.children;
	for(var j=0;j<chilen.length;j++){
		if(this.nodes[0]==chilen[j]){
			return j;
		}
	}
};
Base.prototype.next=function(){
	//console.log(this.nodes)
	for (var i = 0; i < this.nodes.length; i++) {
		this.nodes[i]=this.nodes[i].nextSibling;
		if(this.nodes[i].nodeType==3)this.next();
	}
	return this;
};
Base.prototype.prev=function(){
	for (var i = 0; i < this.nodes.length; i++) {
		this.nodes[i]=this.nodes[i].previousSibling;
		//console.log(this.nodes[i].previousSibling);
		console.log(this.nodes[i]);
		//if(this.nodes[i]==null) throw new Error('找不到上一个同级元素');
		if(this.nodes[i].nodeType==3)this.prev();
	}
	return this;
};
Base.prototype.hover=function(over,out){
	for (var i = 0; i < this.nodes.length; i++) {
		//this.nodes[i].onmouseover=over;
		//this.nodes[i].onmouseout=out;
		addEvent(this.nodes[i],'mouseover',over);
		addEvent(this.nodes[i],'mouseout',out);
	}
	return this;
}
Base.prototype.show=function(){
	for (var i = 0; i < this.nodes.length; i++) {
		this.nodes[i].style.display='block';
	}
	return this;
}
Base.prototype.hide=function(){
	for (var i = 0; i < this.nodes.length; i++) {
		this.nodes[i].style.display='none';
	}
	return this;
}
Base.prototype.center=function(width,height){
	var top=(getInner().height-height)/2+getScroll().top;
	 var left=(getInner().width-width)/2+getScroll().left;
	for (var i = 0; i < this.nodes.length; i++) {
		//console.log(document.documentElement.clientHeight+'-'+document.documentElement.clientWidth);
		this.nodes[i].style.top=top+'px';
		this.nodes[i].style.left=left+'px';
	}
	return this;
}
Base.prototype.resize=function(fn){
	for (var i = 0; i < this.nodes.length; i++) {
		var element=this.nodes[i];
		addEvent(window,'resize',function(){
			fn();
			if(element.offsetLeft>getInner().width+getScroll().left-element.offsetWidth){
				element.style.left=getInner().width+getScroll().left-element.offsetWidth+'px';
				if(element.offsetleft<=0+getScroll().left){
					element.style.left=0+getScroll().left+'px';
				}
			}else if(element.offsetTop>getInner().height+getScroll().top-element.offsetHeight){
				element.style.top=getInner().height+getScroll().top-element.offsetHeight+'px';
				if(element.offsetTop<=0+getScroll().top){
					element.style.top=0+getScroll().top+'px';
				}
			}
		});
	}
	return this;
};
Base.prototype.bind=function(type,fn){
	for (var i = 0; i < this.nodes.length; i++) {
		addEvent(this.nodes[i],type,fn);
	}
	return this;
};
Base.prototype.form=function(name){
	for (var i = 0; i < this.nodes.length; i++) {
		this.nodes[i]=this.nodes[i][name];
	}
	return this;
};
Base.prototype.value= function(str) {
	for (var i = 0; i < this.nodes.length; i++) {
		if(arguments.length==0){
			return this.nodes[i].value;
		}
		this.nodes[i].value=str;
	}
	return this;
};
Base.prototype.name= function(str) {
	for (var i = 0; i < this.nodes.length; i++) {
		if(arguments.length==0){
			return this.nodes[i].name;
		}
		this.nodes[i].name=str;
	}
	return this;
};
Base.prototype.lock=function(){
	for (var i = 0; i < this.nodes.length; i++) {
		fixedScroll.top=getScroll().top;
		fixedScroll.left=getScroll().left;
		var left=getScroll().left;
		this.nodes[i].style.display='block';
		this.nodes[i].style.width=getInner().width+getScroll().left+'px';
		this.nodes[i].style.height=getInner().height+getScroll().top+'px';
		this.nodes[i].style.display='block';
		addEvent(this.nodes[i],'mousedown',predef);
		addEvent(this.nodes[i],'mouseup',predef);
		addEvent(this.nodes[i],'selectstart',predef);
		document.documentElement.style.overflow='hidden';
		addEvent(window,'scroll',fixedScroll);
	}
	return this;
}
Base.prototype.unlock=function(){
	for (var i = 0; i < this.nodes.length; i++) {
		this.nodes[i].style.display='none';
		this.nodes[i].style.width=0;
		this.nodes[i].style.height=0;
		document.documentElement.style.overflow='auto';
		removeEvent(window,'scroll',fixedScroll);
		removeEvent(this.nodes[i],'mousedown',predef);
		removeEvent(this.nodes[i],'mouseup',predef);
		removeEvent(this.nodes[i],'selectstart',predef);
	}
	return this;
}
Base.prototype.extend=function(name,fn){
	Base.prototype[name]=fn;
}
Base.prototype.toggle=function(){
	for (var i = 0; i < this.nodes.length; i++) {
		//tog(this.nodes[i],arguments);
		(function(node,args){
			var count=0;
			addEvent(node,'click',function(){
				args[count++].call(this);
				if(count>=args.length) count=0;
			});
		})(this.nodes[i],arguments);
	}
	return this;
}
function tog(node,args){
	var count=0;
	addEvent(node,'click',function(){
			args[count++].call(this);
			if(count>=args.length) count=0;
	});
};
Base.prototype.animate=function(obj){
	for (var i = 0; i < this.nodes.length; i++) {
		var node=this.nodes[i];
		//是改变top left width还是height
		var attr=obj['attr']=='x'?'left':obj['attr']=='y'?'top':
			obj['attr']=='w'?'width':obj['attr']=='h'?'height':
			obj['attr']=='o'?'opacity':'left';
		//起始位置和left一致
		var start=obj['start']!=undefined?obj['start']:
			attr=='opacity'?parseFloat(getStyle(node,attr)):
							parseInt(getStyle(node,attr));
		//多长时间执行一次
		var t=obj['t']!=undefined?obj['t']:50;
		//移动的步长
		var step=obj['step']!=undefined?obj['step']:10;
		//移动的速度
		var speed=obj['speed']!=undefined?obj['speed']:6;
		//移动的方式
		var type=obj['type']==0?'constant':obj['type']==1?'buffer':'buffer';
		//移动的增量
		var alter=obj['alter'];
		//移动到什么位置
		var target=obj['target'];
		var mul=obj['mul'];
		//var fn=obj['fn'];
		//如果增量存在而目标不存在，就是使用增量
		if(alter!=undefined&&target==undefined){
			target=alter+start;
		}else if(alter==undefined&&target==undefined&&mul==undefined){
			throw new Error('alert增量和target目标量必须传一个');
		}

		//如果目标小于正常值，设置步长为负
		if(parseInt(getStyle(node,attr))>target) step=-step;
		//设置起始位置，和当前位置一致
		if(attr=='opacity'){
			node.style.opacity=start/100;
			node.style.filter='alpha(opacity='+start+')';
		}else{
			node.style['attr']=start+'px';
		}
		if(mul==undefined){
			mul={};
			mul[attr]=target;
		}
		//防止计数器累加
		clearInterval(node.timer);
		//开始移动
		node.timer=setInterval(function(){
			var flag=true;
			for(var i in mul){
				attr=i=='x'?'left':i=='y'?'top':i=='w'?'width':i=='h'?'height':i=='o'?'opacity':i!=undefined?i:'left';
				target=mul[i];
				//判断移动的方式
				if(type=='buffer'){
					//根据位置和速度获取步长
					step=attr=='opacity'?(target-parseFloat(getStyle(node,attr))*100)/speed:
										(target-parseInt(getStyle(node,attr)))/speed;
					//根据步长是正数还是负数，决定步长的值（步长可能为小数）
					step=step>0?Math.ceil(step):Math.floor(step);
				}
				if(attr=='opacity'){
					if(step==0){
						setOpacity();
					}else if(step>0&&Math.abs(parseFloat(getStyle(node,attr))*100-target)<=step){
						setOpacity();
					}else if(step<0&&(parseFloat(getStyle(node,attr))-target)*100<=Math.abs(step)){
						setOpacity();
					}else{
						var temp=parseFloat(getStyle(node,attr))*100;
						node.style.opacity=parseInt(temp+step)/100;
						node.style.filter='alpha(opacity='+(temp+step)+')';
					}
					if(parseInt(target)!=parseInt(parseFloat(getStyle(node,attr))*100)) flag=false;
				}else{
					//如果步长为0，让元素移动到目标点
					if(step==0){
						//console.log('step=0');
						setTarget();
						//如果步长为大于0，并且移动的目标点的距离的绝对值小于步长
					}else if(step>0&&Math.abs(parseInt(getStyle(node,attr))-target)<=step){
						//console.log('yes');
						setTarget();
						//如果步长为小于0，并且移动的目标点的距离小于步长绝对值
					}else if(step<0&&(parseInt(getStyle(node,attr))-target)<=Math.abs(step)){
						//console.log('no');
						setTarget();
					}else{
						//元素移动中
						node.style[attr]=parseInt(getStyle(node,attr))+step+'px';
					}
					if(parseInt(target)!=parseInt(getStyle(node,attr))) flag=false;
				}
				//node.innerHTML+=i+'='+flag+'<br/>';
				//console.log(i+flag);
			}
			if(flag){
				clearInterval(node.timer);
				if(obj.fn)obj.fn();
			}
		},t);
		function setTarget(){
			node.style[attr]=target+'px';
		}
		function setOpacity(){
			node.style.opacity=parseInt(target)/100;
			node.style.filter='alpha(opacity='+parseInt(target)+')';
		}
	}
	return this;
}