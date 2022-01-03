// 函数是由 事件驱动 或者当它 被调用执行 的 可重复使用 的代码块
// 封装
function myFunction() {
  alert('hello')
  console.log('hello');
}
// 另一种的写法

var das = function() {
  
}
das()

// 箭头函数 了解
var lioe = () => {
  alert('hello')
  console.log('hello');
}

lioe()

// myFunction() // 调用函数 ： 函数名()

// function sum(param1,param2)  形参

// 函数的作用域
function sum(a, b) { //变量在函数内声明 只能在函数内部访问
  var a = 10 // 局部变量
  var b = 20
  console.log(a, b);

}
sum(10, 1000) // 实参
// console.log(a,b);


// 全局变量
var x = 'xxxx' // 变量在函数外定义 即为全局变量
function getX() {
  console.log(x)
}

getX()
// 函数的返回值 
function getSum(a, b) {
  return a + b
}

var getSumX = 10
var getSumY = 20

var sum = getSum(getSumX, getSumY)
// var x1 = getSum(sum, getSumY) - getSum(sum, getSumX)

// console.log(x1);

function sort(attr) { // 形参为数组格式
  for (var i = 0; i < attr.length - 1; i++) {
    for (var j = i + 1; j < attr.length; j++) {
      if (attr[j] > attr[i]) {
        var temp = attr[j]
        attr[j] = attr[i]
        attr[i] = temp
      }
    }
  }
  return attr
}


var array1 = [1, 564, 878, 154, 789, 56786, 126, 748]
var array2 = [1123, 564, 878, 154512, 789, 567863, 1262, 7438]
console.log(sort('asdasd'));
console.log(sort(array2));


function syanc() {
  var value = document.getElementById('pwd').value
  alert(value)
}
