$().extend('serialize',function(){
	for (var i = 0; i < this.nodes.length; i++) {
		var form=this.nodes[i];
		var parts={};
		for(var h = 0; h < form.nodes.length; h++){
			var filed=form.nodes[h];
			switch(filed.type){
				case undefined:
				case 'submit':
				case 'reset':
				case 'file':
				case 'button':
					break;
				case 'radio':
				case 'checkbox':
					if(!filed.selected) break;
				case 'select-one':
				case 'select-multiple':
					for(var j=0;j<filed.options.length;j++){
						var options=filed.options[j];
						if(options.selected){
							var optValue='';
							if(options.hasAttribute){
								optValue=(options.hasAttribute("value")?options.value:options.text);
							}else{
								optValue=(options.attribute("value").specified?options.value:options.text);
							}
							parts[filed.name]=optValue;
						}
					}
				default:
					parts[filed.name]=filed.value;
			}
		}
		return parts;
	}
});