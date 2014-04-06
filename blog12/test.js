var canvas=document.getElementById('clock');
console.dir(canvas);
var context=canvas.getContext('2d');
function drawClock(){
	var now=new Date();
	var sec=now.getSeconds();
	var min=now.getMinutes();
	var hours=now.getHours();

//算出小时数和分钟数(浮点数)
	hours=hours+min/60+sec/3600;
	hours=hours>12?hours-12:hours;
	min=min+sec/60;	
	context.clearRect(0,0,300,300);
	context.lineWidth=7;
	
	context.strokeStyle='#cdc';
	context.beginPath()
	context.arc(150,150,100,0,Math.PI*2,false);
	context.stroke();
	
	for(var i=0;i<60;i++){
		//保存当前的绘图环境
		context.save();
		context.beginPath();
		//设置时针线宽
		context.lineWidth=3;
		//设置时针的颜色
		context.strokeStyle='#cdc';
		//坐标点重置
		context.translate(150,150);
		//围绕中心旋转指定角度
		context.rotate(Math.PI/30*i);
		//线段开始坐标
		context.moveTo(0,-80);
		//结束坐标
		context.lineTo(0,-90);
		context.stroke();
		//释放绘图环境
		context.restore();
	}
	
	for(var i=0;i<12;i++){
		//保存当前的绘图环境
		context.save();
		context.beginPath();
		//设置时针线宽
		context.lineWidth=2;
		//设置时针的颜色
		context.strokeStyle='#010';
		//坐标点重置
		context.translate(150,150);
		//围绕中心旋转指定角度
		context.rotate(Math.PI/6*i);
		//线段开始坐标
		context.moveTo(0,-70);
		//结束坐标
		context.lineTo(0,-90);
		context.stroke();
		//释放绘图环境
		context.restore();
	}
	
	context.save();
	context.beginPath();
	context.lineWidth=4;
	context.strokeStyle='#000';
	context.translate(150,150);
	context.rotate(Math.PI/6*hours);
	context.moveTo(0,0);
	context.lineTo(0,-60);
	context.stroke();
	context.restore();

	context.save();
	context.beginPath();
	context.lineWidth=3;
	context.strokeStyle='#000';
	context.translate(150,150);
	context.rotate(Math.PI/30*min);
	context.moveTo(0,0);
	context.lineTo(0,-70);
	context.stroke();
	context.restore();

	context.save();
	context.beginPath();
	context.lineWidth=2;
	context.strokeStyle='red';
	context.translate(150,150);
	context.rotate(Math.PI/30*sec);
	context.moveTo(0,0);
	context.lineTo(0,-90);
	context.stroke();
	context.restore();

	context.beginPath();
	context.arc(150,150,7,0,Math.PI*2,false);
	context.fill();
	context.lineWidth=3;
	context.stroke();
}
drawClock();
setInterval(drawClock,1000);