<template>
  <div class="com">
    <div class="display">
      <div class="his">{{ his }}</div>
      <div class="new">{{ newVal }}</div>
      <!--  v-model.trim 用作去除前后空格    -->
    </div>
    <div class="btn-panel">
      <div class="keyboard"   @mousedown="clickDownBtn" @mouseup="clickUpBtn">
        <div class="btn" v-for="(item,index) in list" :key="index" @click="btnClick(index)">
          {{ item }}
        </div>
      </div>
      <div class="op" @mousedown="clickDownBtn" @mouseup="clickUpBtn">
        <div class="opBtn" v-for="(item,index) in opList" :key="index">
          {{ item }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      his: '', // 历史输入
      newVal: '', // 新的输入
      clickOp: false,
      list: ['7','8','9','4','5','6','1','2','3','+/-','0','.'],
      opList: ['x','-','+','=']
    }
  },
  methods: {
    /** 点击数字按键 */
    btnClick(index) {
      // 方法里 使用实例化的data数据
      console.log(this.list[index])
      this.newVal += this.list[index]
    },
    /** 鼠标落下 */
    clickDownBtn(e) {
      e.target.classList.add('down')
    },
    /** 鼠标抬起 */
    clickUpBtn(e) {
      e.target.classList.remove('down')
    }
  },
}
</script>
scoped 保证页面样式不会互相影响
<style scoped lang="scss">
.com {
  width: 350px;
  background-color: rgb(230,230,230);
  .display{
    height: 150px;
  }
}
.btn-panel{
  display: flex;
   .keyboard{
     flex: 3;
     display: flex;
     flex-wrap: wrap;
   }
  .op{
    flex: 1;
  }
}

// 按钮样式
.btn{
  flex: 1;
  min-width: 32%;
  height: 70px;
  line-height: 70px;
  background-color: #fff;
  margin-right: 1px;
  font-size: 18px;
  color: #000;
  margin-top: 1px;
  text-align: center;
  font-weight: bolder;
}
.opBtn{
  height: 70px;
  line-height: 70px;
  background-color: rgb(240,240,240);
  margin-right: 1px;
  font-size: 18px;
  color: #000;
  margin-top: 1px;
  text-align: center;
  font-weight: bolder;
}
// 鼠标悬浮
.btn:hover,.opBtn:hover{
  background-color: rgb(209,209,209);
}
// 鼠标落下
.btn.down,.opBtn.down{
  background-color: rgb(187,187,187);
}
</style>
