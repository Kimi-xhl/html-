// Dom事件

// 1. 点击事件 onclick     鼠标落下 + 鼠标抬起
function btnClick(){
  document.getElementById('demo').innerHTML = '<a href="http://www.baidu.com">百度一下</a>'
}
// 2.. 点击事件 onmousedown 鼠标落下
function btnOnMouseDown() { 
  document.getElementById('demo').innerHTML = '鼠标落下'
 }
 // 3.. 点击事件 onmouseup 鼠标抬起
 function btnOnMouseUp() { 
  document.getElementById('demo').innerHTML = '鼠标抬起'
 }
 // 4. 鼠标移动事件 onmousemove
 function move(e) {
  e.style.height = '350px'
  e.style.width = '350px'
  document.getElementById('demo').innerHTML = '鼠标移动'
}
// 5. 鼠标移除事件 onmouseout
function out(e) {
  e.style.height = '300px'
  e.style.width = '300px'
  document.getElementById('demo').innerHTML = '鼠标移出'
}

// --------------------------------------------------
// 键盘事件 onkeypress 键盘落下 + 抬起
function EnterPress(e) {
  console.log(e);
  if (e.keyCode == 13) {
    document.getElementById('demo').innerHTML = '你按下了回车键'
  }
}
// 键盘落下 onkeydown
// 键盘抬起 onkeyup

// ---------------------------------------------------------
// 拖动事件 ondrap 该事件在元素正在拖动的时候触发