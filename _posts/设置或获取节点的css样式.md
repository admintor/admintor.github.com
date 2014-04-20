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