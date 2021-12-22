// document 文档 Dom Document Object Model 
// 面向对象思想
// 1. 改变页面中所有的HTML 元素
// 2. 改变页面中所有HTML 元素的属性
// 3. 改变页面中所有css样式
// 4. 对页面中的事件做出反应

// 改变样式
var a = document.getElementById('box') // 通过ID 去寻找元素
a.style.backgroundColor='blue'
var b = document.getElementsByClassName('box') // 通过类去寻找元素
// // 创建元素
// document.write('<p>这是一个创建的元素</p>')
// document.write('<div>这是一个创建的元素</div>')

a.onclick = function () {
  console.log(111);
  document.write('<div>点击创建的元素</div>')
}

function click() {
  console.log('1111');
  document.write('<div>点击创建的元素</div>')
}