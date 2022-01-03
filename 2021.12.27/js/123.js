// var sb = 0
// var sbb = [12,34,2322,4425,761231]
// for(var i=0; i<sbb.length;i++){
//     sb = sb + sbb[i]
//     console.log(sb);
// }

// for (var i = 2; i < 100; i++){
//     var falg = true
//     for (var j =2; j<i; j++){
//         if (i % j == 0){
//             falg = false;
//         }
//     }
//     if (falg) {
//         console.log(i)
//     }
// }
// var arr = [0,413,1,0634,0,156,120,0,45,0,0]
// console.log(arr)    
// for (var i = 0 ; i < arr.length; i++){
//     if(String(arr[i])=='0'){
//         arr.splice(i,1)
//     }
// }

// // x%2

// // for (var i = 0; i<=7; i++){
// //     for(var j=0 ; j<i;j++){
// //         document.write('*')
// //     }
// //     document.write('<br>')
// // }


// var sb = [0,413,1,0634,0,156,120,0,45,0,0]
// for( var i = 0; i < sb.length; i++){
//     console.log(sb[i]);
//     if(sb[i] == '0'){
//         console.log();
//     }

// }

// var bai=Number(prompt('请输数字md'))
// var shi=Number(prompt('请输入数字md'))
// var ge=Number(prompt('请输入数字fk'))
// if(bai*bai*bai+ shi*shi*shi+ ge*ge*ge== bai*100 + shi*10+ ge){
//     console.log(true);
// }else{
//     console.log(false);
// }

// var sb=[1,1231,1,5465,12,5465,1,12,77,89,77]
// var sbb=[]
// var cnm= true
// for (var i = 0; i<sb.length; i++){
//     cnm=true
//     for (var j=0; j<sbb.length; j++){
//         if (sb[i]==sbb[j]){
//             cnm=false
//         }
//     } 
//     if(cnm){
//         sbb.push(sb[i])
//     }
// }
// console.log(sbb);

// 12.27 作业：

// var sum = 0
// for(var i=1 ; i<= 64 ; i++){
//     sum += Math.pow(2,i - 1)
// }
// document.write('共' + sum*0.00001 + 'kg')
var array = []

function getRabdom(num1, num2) {
  var sb = num2 - num1 + 1
  var sbb = Math.floor(Math.random() * sb + num1)
  return sbb
}
for (var i = 0; i < 10; i++) {
  array.push(getRabdom(10, 100))
}
array.sort(function (a, b) {
  return a > b
})
console.log(array);