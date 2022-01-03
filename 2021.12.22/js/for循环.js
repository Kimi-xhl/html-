// for 循环
// var cars = ['BMW','Volvo','Saab','Benz']
// for(var i=0;i<cars.length;i++){ // 遍历
//   console.log(i); // 0 1 2 
// }

// for (var i=0;)
//语句1:(代码块) 开始前执行
//语句2:定义运行循环的条件(代码块)
//语句3:在循环已被执行后执行
// 步骤1：定义一个变量 i = 0
// 步骤2: 判断是否满足循环条件 ？ 满足：执行循环体 不满足：跳出循环
// 步骤3：执行语句3
// 重复步骤2-3

//例子2
// var number = [100,10,5312,400,675,1651,120,215,3465]
// for(var i=0;i<number.length;i++){
//   if (number[i] > 500){
//     console.log(number[i]);
//   }
// }

//题目
// console.log('*');
// console.log('**');
// console.log('***');
// console.log('****');

//答案
// for(var i=0;i<4;i++){ // 0 1 2 3

//   for(var j=0;j<i;j++){
//     document.write('*')
//   }

//   document.write('<br>')
// }

// document.write('完成')  
// document.write('<br>')

// **** 4 1
// *** 3 2
// ** 2 3
// * 1 4

// for(var i=1;i<=4;i++){  
//   for(var j=4;j>=i;j--){
//     document.write('*')
//   }
//   document.write('<br>')
// }
/**
 * 开始步骤 var i = 1
 * 循环i 判断条件 i<=4 ? 此时i=1 
 * 进入循环体
 *  循环j 开始步骤 var j = 4
 *  循环j 判断条件 j>=i ? 此时 i=1 j=4
 *  进入循环体j 执行*
 *  执行完毕 j--
 *  循环j 判断条件 j>=i ? 此时 i=1 j=3
 *  进行循环体j 执行* 此时**
 *  ...
 *  一直到j<=4 不满足 此时****
 *  跳出循环
 * document.write('<br>') i=1结束 i++
 * 循环i 判断条件 i<=4 ? 此时i=2 
 */

// 水仙花数 三位数 各个数字的立方等于本身 153 = 1*1*1 + 5*5*5 + 3*3*3 354
// 题目 算出100 - 1000以内的水仙花水
// parseInt 取整 例如 9413.1654135 = 9413
// 354
// for(var i = 100; i< 999 ;i++){
//   var bai = parseInt(i/100)
//   var shi = parseInt((i-bai*100)/10) 
//   var ge  = i - bai*100 - shi*10 
//   if( bai*bai*bai + ge*ge*ge + shi*shi*shi == i ){
//     document.write(i + ",")
//   }
// }

// 100以内的质数 97 只能被1和自己整除


// 求和
var array = [165132,416541351,454,8875] // 4

var sum = 0
for(var i =0;i<array.length;i++){
  sum = sum + array[i]
}

// 取最大值
var max = 0
for(var i=0;i<array.length;i++){
  if(array[i] > max){
    max = array[i]
  }
}
// 取最小值
