<template>
  <div class="home">
    <button @click="cleanData">CleanData</button>
    <div class="display">
      <div style="height: 21px" class="sub">{{sub}}</div>
      <div class="main">{{isNar ? main :'-' + main }}</div>
    </div>
    <div class="keyboard">
      <div class="btn_group" @mousedown="btnDown" @mouseup="btnUp">
        <div v-for="(item,index) in list" :key="index" class="btn" @click="clickBtn(item)">
          {{ item }}
        </div>
      </div>
      <div class="op">
        <div class="btn opBtn"
             :class="{purple:index === oplist.length-1}"
             v-for="(item,index) in oplist"
             :key="index"
             @click="clickOp(item)"
        >
          {{ item }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  data() {
    return {
      list: ['7','8','9','4','5','6','1','2','3','+/-','0','.'],
      oplist: ['x','-','+','='],
      current: '',
      main: '0',
      clean: false, // 按等于键之后的数据清空
      flag: false, // 是否重新置空过
      isNar: true, // True表示正数 false表示负数
      sub: ''
    }
  },
  methods: {
    cleanData() {
      this.main = '0'
      this.isNar = true
      this.sub = ''
      this.flag = false
      this.clean = false
  },
    btnDown(e) {
      this.current = e.target
      e.target.classList.add('btnDown')
    },
    btnUp() {
      this.current.classList.remove('btnDown')
    },
    clickBtn(val) {
      /** 按等于号之后清除数据 */
      if(this.clean){
        this.cleanData()
      }

      if(this.sub !== '' && !this.flag) {
        this.main = '0'
        this.flag = true
      }

      if (this.main === '0') {
        // 判断输入是否为数字
        if (val === '.') {
          this.main += val
        } else if(val === '+/-') {
          return
        } else {
          this.main = val
        }
      } else {
        if (val === '+/-') {
          this.isNar = !this.isNar
        } else {
          this.main += val
        }
      }
    },
    clickOp(val) {

      if(this.clean){
        this.sub = this.main + val
        this.clean = false
        this.flag = false
        return
      }

      switch (val) {
        case 'x':
          if(this.flag) {
            /** substring(start,end) 接受字符串开始下标 以及 结束下标  */
            let subNumber = Number(this.sub.substring(0,this.sub.length-1))
            let mainNumber = Number(this.main)
            this.flag = false // 重置flag
            let result = subNumber * mainNumber
            this.sub = result + 'x'
            this.main = result
          } else {
            this.sub = this.main + val
          }
          break;
        case '+':
          if(this.flag) {
            /** substring(start,end) 接受字符串开始下标 以及 结束下标  */
            let subNumber = Number(this.sub.substring(0,this.sub.length-1))
            let mainNumber = Number(this.main)
            this.flag = false // 重置flag
            let result = subNumber + mainNumber
            this.sub = result + '+'
            this.main = result
          } else {
            this.sub = this.main + val
          }
          break
        case '-':
          if(this.flag) {
            /** substring(start,end) 接受字符串开始下标 以及 结束下标  */
            let subNumber = Number(this.sub.substring(0,this.sub.length-1))
            let mainNumber = Number(this.main)
            this.flag = false // 重置flag
            let result = subNumber - mainNumber
            this.sub = result + '-'
            this.main = result
          } else {
            this.sub = this.main + val
          }
          break
        case '=':
          if(this.flag) {
            debugger
            let subNumber = Number(this.sub.substring(0,this.sub.length-1))
            let mainNumber = Number(this.main)

            let op = this.sub.substring(this.sub.length-1,this.sub.length)

            if ( op === 'x' ){
              let result = subNumber * mainNumber
              this.sub = subNumber + '*' + mainNumber + '='
              this.main = result
            } else if ( op === '-') {
              let result = subNumber - mainNumber
              this.sub = subNumber + '-' + mainNumber + '='
              this.main = result
            } else if (op === '+') {
              let result = subNumber + mainNumber
              this.sub = subNumber + '+' + mainNumber + '='
              this.main = result
            }
            this.clean = true
          } else {
            this.sub = this.main + val
          }
          break
        default:
          console.log('defalut')
      }
    }
  },
}
</script>

<style scoped lang="scss">
.purple {
  background-color: plum !important;
}
.home{
  border: 1px solid #000;
  box-shadow: 5px 5px 10px 0px rgba(0,0,0,.4);
  background-color: rgb(230,230,230);
  width: 400px;
  .display{
    padding: 10px 10px;
    text-align: right;
    .sub{
      color: rgb(92,92,92);
    }
    .main{
      font-weight: bolder;
      font-size: 40px;
    }
  }
}
.keyboard{
  padding: 2px;
  display: flex;
  .btn_group{
    flex: 3;
    display: flex;
    flex-wrap: wrap;
  }
  .op{
    flex: 1;
  }
}
.btn{
  width: calc(33.3% - 1.9px);
  height: 70px;
  line-height: 70px;
  text-align: center;
  background-color: #FAFAFA;
  font-size: 22px;
  margin-right: 2px;
  margin-bottom: 2px;
  &:hover{
    background-color: rgb(209,209,209);
  }
}

.opBtn{
  width: 100%;
  background-color: rgb(240,240,240);
}

.btnDown{
  background-color: rgb(187,187,187) !important;
}
</style>
