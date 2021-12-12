// 比较运算符 测定变量或值是否相等

//  == 等于（值和类型不一定相等）
var x = 10
console.log("10 == '10'",10 == '10'); // 会进行自动类型转换
// === 绝对等于 全等于(值和类型都一定相等)
console.log("10 === '10'",10 === '10')
// != 不等于 (值和类型不一定相等)
console.log("10 != 9",10 != 9);
console.log("10 != '10'",10 != '10');
// !== 不绝对等于 不全等于
console.log(10 !== 10); //false
console.log(10 !== '10'); // true
// > 大于 >= 大于或等于
console.log('_______');
console.log( 10 > 9) //true
console.log( 10 > 10)//false
console.log( 10 >= 10)// true
// < 小于 <- 小于等于
console.log(9 < 9);//false
console.log(9 <= 9);// true
console.log(9 < 8);// false