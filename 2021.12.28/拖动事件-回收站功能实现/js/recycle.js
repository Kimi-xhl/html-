//213
function drag(ev){
	
	ev.dataTransfer.setData("text/plain",ev.target.id);
	console.log("开始拖动");
	console.log(ev);
}

function allowDrop(ev){
	
	
	
	ev.preventDefault();
	console.log("进入垃圾箱球衣区域");
}

function drop(ev){
	
	ev.preventDefault();
	
	var id =ev.dataTransfer.getData("text");
	
	var folder =document.getElementById(id);
	
	document.getElementById("container").removeChild(folder);
	console.log("删除完毕");
}
