addEvent(this.nodes[i],'mousedown',function(e){
		e.preventDefault();
	 	var _this=this;
	 	var diffX=e.clientX-_this.offsetLeft;
	 	var diffY=e.clientY-_this.offsetTop;
	 	if(typeof _this.setCapture!='undefined'){
	 		_this.setCapture();
	 	}
	 	addEvent(document,'mousemove',move);
	 	addEvent(document,'mouseup',up);
});
function move(e){
	var e=e||window.event;
	 		var left=e.clientX-diffX;
	 		var top=e.clientY-diffY;
	 		if(left<0){
	 			left=0;
	 		}else if(left>getInner().width-_this.offsetWidth){
	 			left=getInner().width-_this.offsetWidth;
	 		}
	 		if(top<0){
	 			top=0;
	 		}else if(top>=getInner().height-_this.offsetTop){
	 			top=getInner().height-_this.offsetTop;
	 			//console.log(top);
	 		}
	 		_this.style.left=left+'px';
	 		_this.style.top=top+'px';
}
function up(e){
	removeEvent(document,'mousemove',move);
	removeEvent(document,'mouseup',up);
	if(typeof _this.releaseCapture !='undefined'){
		_this.releaseCapture();
	}
}