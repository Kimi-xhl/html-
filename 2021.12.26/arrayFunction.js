var arr = [1, 1231, 1, 5465, 12, 5465, 1, 12, 77, 89, 77] //确保每一项 都不存在于newArray
var newArray = [] //每次添加要和newArray里面的每一项对比 如果不存在添加 存在不添加


for(var i=0;i<arr.length;i++){
  if(newArray.indexOf(arr[i]) == -1){
    newArray.push(arr[i])
  }
}
console.log(newArray);


var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Banana")
var a = fruits.indexOf('Banana') //在数组中搜索指定项目，并返回位置
// 如果未找到项目 返回 -1
// 如果该项目出现多次，则 indexOf() 方法返回第一次出现的位置。