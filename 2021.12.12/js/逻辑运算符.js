// && and 与
var x = 5
console.log( x > 1 && x < 10 && x === '5' ); //左右两边都成立为true 其中条件需要均成立
// || or 或
console.log((x <= 5 || x === '5' || x<1) );  //左右两边只要有一个成立即为true
// ! not 取反
console.log(!true); //取相反的值
console.log(!(1 <5))