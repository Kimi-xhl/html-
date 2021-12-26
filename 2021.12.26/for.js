// for(var i=0;i<4;i++){
//   for(var j=3;j>i;j--){
//     document.write("&nbsp;")
//   }
//   for(var k=0;k<2*i+1;k++){
//     document.write("*")
//   }
//   document.write("</br>")
// }

// var num = 1
// for(var i=6;i>=1;i--){
//   num = (num+1)*2
// }
// console.log(num);

var arr = [1, 1231, 1, 5465, 12, 5465, 1, 12, 77, 89, 77] //确保每一项 都不存在于newArray
var newArray = [] //每次添加要和newArray里面的每一项对比 如果不存在添加 存在不添加
var flag = true //是否应该添加


for (var i = 0; i < arr.length; i++) {

  flag = true

  for (var j = 0; j < newArray.length; j++) {

    if (arr[i] === newArray[j]) {
      flag = false
    }

  }

  if (flag) {
    newArray.push(arr[i])
  }

}
