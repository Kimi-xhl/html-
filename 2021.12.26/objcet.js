/**
 * JavaScript 对象
 * 对象是拥有属性和方法的数据
 */
var car = {
  name: 'Benz',
  color: 'white',
  weight: '850kg'
}
var chenziyu = {
  name: 'chenziyu',
  rich: 'So rich',
  height: '190',
  weight: function(){console.log('aaaa');}
}
chenziyu.name = 'czy'
// 添加属性 或者修改属性
chenziyu.skinColor = 'yellow'
console.log(chenziyu);
// 删除属性
delete chenziyu.skinColor
console.log(chenziyu);
// 取值的第一种方式
console.log(chenziyu.skinColor);
// 取值的第二种方式
console.log(chenziyu['name']);

chenziyu.weight()
