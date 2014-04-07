window.onload=function(){
	var canvas=document.getElementById('canvas');
var context=canvas.getContext('2d');

// window.onMouseup=function() {
// 	var point=point(canvas,300,300);
// 	console.dir(point.x+'--'+point.y);
// }
}
window.onmosemove=function(e){
	console.log(e);
	//var points=point(canvas,300,300);
	//console.dir(points.x+'--'+points.y);
}
function point(element,x,y){
	var box=element.getBoundingClientRect();
	console.log(box);
	var cx=x-box.left;
	var cy=y-box.top;
	return {
		x:cx,
		y:cy
	};
}
//放大镜
function getClip(context,x,y,r){
	
	//开启新路径
	context.beginPath();
	//绘制切割使用路径
	context.arc(x,y,r,0,Math.PI*2,false);
	//绘图环境切割方法(扣范围的内容)
	context.stroke();
	context.Clip();
	
}