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