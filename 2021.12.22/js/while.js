/**
 * while(条件){
 *  需要执行的代码
 * }
 */

// function myfunction(){
//   var x=''
//   var i=0
//   while(i<5){
//     x=x+'该数字为' + i + "<br>"
//     i++
//   }

//   // for(var i=0;i<5;i++){
//   //   x=x+'该数字为' + i + "<br>"
//   // }

//   console.log(x);
//   document.getElementById('demo').innerHTML = x;
// }

//do/while 循环 该循环至少会执行一次 即使条件为false也至少会执行一次 因为代码块会在条件测试前执行
/**
 * do
 * {
 *    需要执行的代码
 * }
 * while(条件)
 */
var z = 100

// do
// {
//   console.log(z);
// }
// while(z<100)

// while(z<100){
//   console.log(z);
// }
// for(z;z<100;z++){
//   console.log(z);
// }

// for循环 和while循环相似
// while循环遍历
var cars = ['BMW','Volvo','Saab','Benz']
// var i =0;
// while(i<cars.length)
// {
//   document.write(cars[i]+"<br>")
//   i++
// }

// for 循环
for(var i=0;i<cars.length;i++){
  console.log(cars[i]);
}