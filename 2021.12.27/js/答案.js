// 用js实现随机选取10~100之间的10个数字，存入一个数组，并排序。
// parseInt 将类型变换为Int 类型 Number
// Math.random() //返回0 - 1 之间的随机数 [0,1] 0.56453 （0,10）
var attr = [];
for(var i=0;i<10;i++){
  attr[i] = parseInt(Math.random()*90+10)
}

// i 最大值 9 attr.length = 10

for(var i=0;i<attr.length-1;i++){
  for(var j=i+1;j<attr.length;j++){
    if(attr[j] > attr[i]){
      var temp = attr[j]
      attr[j] = attr[i]
      attr[i] = temp
    }
  }
}

attr.sort(function (a,b) { return b - a })


console.log(attr);